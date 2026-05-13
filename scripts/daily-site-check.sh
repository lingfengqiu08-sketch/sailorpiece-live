#!/usr/bin/env bash

set -u

SITE_URL="${SITE_URL:-https://sailorpiece.live}"
WWW_CHECK_URL="${WWW_CHECK_URL:-https://www.sailorpiece.live/codes?daily=1}"
GSC_SITE_URL="${GSC_SITE_URL:-https://sailorpiece.live/}"
GA4_PROPERTY_ID="${GA4_PROPERTY_ID:-537560408}"
GA_MEASUREMENT_ID="${GA_MEASUREMENT_ID:-G-2P1NYWVDHG}"
VERIFY_FILE="${VERIFY_FILE:-googleed08fb5e3b682133.html}"

failures=0

pass() {
  printf "PASS %s\n" "$1"
}

fail() {
  printf "FAIL %s\n" "$1"
  failures=$((failures + 1))
}

http_status() {
  curl -sS -o /dev/null -w "%{http_code}" "$1" || printf "000"
}

check_status() {
  local label="$1"
  local url="$2"
  local expected="$3"
  local status

  status="$(http_status "$url")"
  if [[ "$status" == "$expected" ]]; then
    pass "$label HTTP $status"
  else
    fail "$label expected HTTP $expected, got $status"
  fi
}

start_date() {
  date -v-7d +%F 2>/dev/null || date -d "7 days ago" +%F
}

check_public_site() {
  check_status "Homepage" "$SITE_URL" "200"
  check_status "Sitemap" "$SITE_URL/sitemap.xml" "200"
  check_status "GSC verification" "$SITE_URL/$VERIFY_FILE" "200"

  local redirect_info
  local status
  local redirect_url

  redirect_info="$(curl -sS -o /dev/null -w "%{http_code} %{redirect_url}" "$WWW_CHECK_URL" || printf "000 ")"
  status="${redirect_info%% *}"
  redirect_url="${redirect_info#* }"

  if [[ "$status" == "308" && "$redirect_url" == "$SITE_URL/codes?daily=1" ]]; then
    pass "www canonical redirect"
  else
    fail "www redirect expected 308 to $SITE_URL/codes?daily=1, got $status to $redirect_url"
  fi

  local html
  html="$(curl -sS "$SITE_URL" || true)"
  if [[ "$html" == *"googletagmanager.com/gtag/js"* && "$html" == *"$GA_MEASUREMENT_ID"* ]]; then
    pass "GA4 script present"
  else
    fail "GA4 script missing from homepage HTML"
  fi
}

check_google_apis() {
  if ! command -v gcloud >/dev/null 2>&1; then
    fail "gcloud is not installed"
    return
  fi

  if ! command -v jq >/dev/null 2>&1; then
    fail "jq is not installed"
    return
  fi

  local token
  token="$(gcloud auth application-default print-access-token 2>/dev/null || true)"
  if [[ -z "$token" ]]; then
    fail "gcloud ADC token unavailable"
    return
  fi

  local start
  local end
  local encoded_site
  local gsc_body
  local ga4_body
  local gsc_out
  local ga4_out
  local status

  start="$(start_date)"
  end="$(date +%F)"
  encoded_site="$(jq -nr --arg v "$GSC_SITE_URL" '$v|@uri')"
  gsc_body="$(jq -n --arg start "$start" --arg end "$end" '{startDate:$start,endDate:$end,dimensions:["query"],rowLimit:10}')"
  ga4_body="$(jq -n --arg start "$start" --arg end "$end" '{dateRanges:[{startDate:$start,endDate:$end}],dimensions:[{name:"date"}],metrics:[{name:"activeUsers"},{name:"screenPageViews"}],limit:"10"}')"
  gsc_out="$(mktemp)"
  ga4_out="$(mktemp)"

  status="$(curl -sS -o "$gsc_out" -w "%{http_code}" \
    -H "Authorization: Bearer $token" \
    -H "Content-Type: application/json" \
    -d "$gsc_body" \
    "https://www.googleapis.com/webmasters/v3/sites/$encoded_site/searchAnalytics/query")"
  if [[ "$status" == "200" ]]; then
    pass "GSC API query HTTP 200, rows $(jq '(.rows // []) | length' "$gsc_out")"
  else
    fail "GSC API query HTTP $status"
  fi

  status="$(curl -sS -o "$ga4_out" -w "%{http_code}" \
    -H "Authorization: Bearer $token" \
    -H "Content-Type: application/json" \
    -d "$ga4_body" \
    "https://analyticsdata.googleapis.com/v1beta/properties/$GA4_PROPERTY_ID:runReport")"
  if [[ "$status" == "200" ]]; then
    pass "GA4 API runReport HTTP 200, rows $(jq '(.rows // []) | length' "$ga4_out")"
  else
    fail "GA4 API runReport HTTP $status"
  fi

  rm -f "$gsc_out" "$ga4_out"
}

check_public_site
check_google_apis

if [[ "$failures" -gt 0 ]]; then
  printf "Daily check failed with %s issue(s).\n" "$failures"
  exit 1
fi

printf "Daily check passed.\n"
