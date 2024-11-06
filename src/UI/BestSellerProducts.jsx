import Product from "../components/Product";
import SectionHeader from "../components/SectionHeader";
import { PRODUCTS } from "../util/database";
// Stores Dynamic products
const selectedProducts = [];
function getRandomProductsFromEachCategory() {
  Object.keys(PRODUCTS).forEach((category) => {
    const items = PRODUCTS[category];
    const randomIndex = Math.floor(Math.random() * items.length);
    selectedProducts.push(items[randomIndex]);
  });
  return selectedProducts;
}
function getRandomFourProducts() {
  getRandomProductsFromEachCategory();
  const shuffledProducts = selectedProducts.sort(() => 0.5 - Math.random());
  return shuffledProducts.slice(2, 7);
}

// Stores Final Random 4 Products
const randomProduct = getRandomFourProducts();

export default function BestSeller() {
  return (
    <section className="px-[5%] md:px-[10%] py-12 relative overflow-hidden">
      <SectionHeader title="Best Seller Products" />
      <section className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row items-center justify-between gap-6 mt-8">
        {randomProduct.map((product) => {
          return <Product key={product.name} {...product} />;
        })}
      </section>
    </section>
  );
}
