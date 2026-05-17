import { WikiGuidePage } from "@/components/WikiGuidePage";
import { buildMetadata } from "@/lib/seo";
import { WIKI_GUIDES } from "@/lib/wiki-guides";

const guide = WIKI_GUIDES.accessories;

export const metadata = buildMetadata({
  title: guide.metaTitle,
  description: guide.metaDescription,
  path: guide.path,
});

export default function AccessoriesPage() {
  return <WikiGuidePage guide={guide} />;
}
