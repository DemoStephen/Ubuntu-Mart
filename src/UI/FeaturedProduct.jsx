import Product from "../components/Product";
import { PRODUCT } from "../util/data";
import assets from "../assets/product-assets.png";
import SectionHeader from "../components/SectionHeader";
export default function FeaturedProduct() {
  return (
    <section className="px-[5%] md:px-[10%] py-12 relative overflow-hidden">
      <SectionHeader title="Featured Product" />
      <section className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row items-center justify-between gap-6 mt-8">
        {PRODUCT.map((product) => {
          return <Product key={product.name} {...product} />;
        })}
      </section>
      <div className="absolute md:top-16 top-1/2  left-0 animate-pulse">
        <img src={assets} alt="pear" className="w-3/4 " />
      </div>
    </section>
  );
}
