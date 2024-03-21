import { ProductGrid, Title } from "@/components/index";
import { IProduct } from "src/interfaces";
import { initialData } from "src/seed/seed";

export default function HomePage() {
  const products = initialData.products
  return (
    <main className="w-full px-5 lg:px-15">
      <Title title="Shop" subtitle="All the products"/>
      <ProductGrid products={products}/>
    </main>
  );
}
