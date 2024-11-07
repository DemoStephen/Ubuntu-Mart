import Product from "../components/Product";
import { PRODUCTS } from "../util/database";
import vector from "../assets/images/Vector/vector_pear.png";
import SectionHeader from "../components/SectionHeader";

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
  return shuffledProducts.slice(0, 4);
}

// Stores Final Random 4 Products
const randomProduct = getRandomFourProducts();
export default function FeaturedProduct() {
  return (
    <section className="px-[5%] md:px-[10%] py-12 relative overflow-hidden">
      <SectionHeader title="Featured Product" />
      <section className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row items-center justify-between gap-6 mt-8">
        {randomProduct.map((product) => (
          <Product key={product.name} {...product} />
        ))}
      </section>
      <div className="absolute md:top-16 top-1/2  left-0 animate-pulse">
        <img src={vector} alt="pear" className="w-3/4 " />
      </div>
    </section>
  );
}
