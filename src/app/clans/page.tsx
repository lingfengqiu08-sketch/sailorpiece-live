import { CategoryGuidePage } from "@/components/CategoryGuidePage";
import { CATEGORY_GUIDES } from "@/lib/category-guides";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: CATEGORY_GUIDES.clans.metaTitle,
  description: CATEGORY_GUIDES.clans.metaDescription,
  path: "/clans",
});

export default function ClansPage() {
  return <CategoryGuidePage category="clans" />;
}
