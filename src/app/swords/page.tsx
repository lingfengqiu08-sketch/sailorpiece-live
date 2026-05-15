import { CategoryGuidePage } from "@/components/CategoryGuidePage";
import { CATEGORY_GUIDES } from "@/lib/category-guides";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: CATEGORY_GUIDES.swords.metaTitle,
  description: CATEGORY_GUIDES.swords.metaDescription,
  path: "/swords",
});

export default function SwordsPage() {
  return <CategoryGuidePage category="swords" />;
}
