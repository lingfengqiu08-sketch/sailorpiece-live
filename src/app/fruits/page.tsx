import { CategoryGuidePage } from "@/components/CategoryGuidePage";
import { CATEGORY_GUIDES } from "@/lib/category-guides";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: CATEGORY_GUIDES.fruits.metaTitle,
  description: CATEGORY_GUIDES.fruits.metaDescription,
  path: "/fruits",
});

export default function FruitsPage() {
  return <CategoryGuidePage category="fruits" />;
}
