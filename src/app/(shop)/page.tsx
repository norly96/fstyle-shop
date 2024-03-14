import { ProductGrid, Title } from "@/components/index";
import { IProduct } from "src/interfaces";
import { initialData } from "src/seed/seed";

export default function HomePage() {
  const products = initialData.products
  return (
    <main className="">
      <Title title="Shop" subtitle="Todos los productos"/>
      <ProductGrid products={products}/>
    </main>
  );
}
