import { WikiGuidePage } from "@/components/WikiGuidePage";
import { buildMetadata } from "@/lib/seo";
import { WIKI_GUIDES } from "@/lib/wiki-guides";

const guide = WIKI_GUIDES.runes;

export const metadata = buildMetadata({
  title: guide.metaTitle,
  description: guide.metaDescription,
  path: guide.path,
});

export default function RunesPage() {
  return <WikiGuidePage guide={guide} />;
}
