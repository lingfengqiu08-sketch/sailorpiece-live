import { CategoryGuidePage } from "@/components/CategoryGuidePage";
import { CATEGORY_GUIDES } from "@/lib/category-guides";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: CATEGORY_GUIDES.traits.metaTitle,
  description: CATEGORY_GUIDES.traits.metaDescription,
  path: "/traits",
});

export default function TraitsPage() {
  return <CategoryGuidePage category="traits" />;
}
