import Point from "../components/Point";
import SectionHeader from "../components/SectionHeader";
import { PRODUCT_CATEGORY } from "../util/data";
import leave from "../assets/headerasset7.png";
import green from "../assets/headerasset9.png";
export default function TopCategories() {
  return (
    <section className="px-[10%] py-16 bg-gradient-to-b from-green-50 to-gray-50 relative">
      <SectionHeader title="Shop By Top Categories" />
      <section className="grid grid-cols-2 md:flex items-center gap-4 mt-8">
        {PRODUCT_CATEGORY.map((category) => {
          return <Point key={category.title} {...category} number />;
        })}
      </section>
      <div className="absolute w-20 -top-10 rotate-180 left-9 animate-bounce">
        <img src={leave} alt="leave" className="w-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-32">
        <img src={green} alt="leave" className="w-full" />
      </div>
    </section>
  );
}
