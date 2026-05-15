import { CategoryGuidePage } from "@/components/CategoryGuidePage";
import { CATEGORY_GUIDES } from "@/lib/category-guides";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: CATEGORY_GUIDES.haki.metaTitle,
  description: CATEGORY_GUIDES.haki.metaDescription,
  path: "/haki",
});

export default function HakiPage() {
  return <CategoryGuidePage category="haki" />;
}
