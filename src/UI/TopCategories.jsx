import Point from "../components/Point";
import SectionHeader from "../components/SectionHeader";
import { CATEGORIES } from "../util/database";
import leave from "../assets/images/Vector/vector_assets7.png";
import green from "../assets/images/Vector/vector_assets9.png";
export default function TopCategories() {
  return (
    <section
      className="px-[10%] py-16 bg-gradient-to-b from-green-50 to-gray-50 relative"
      id="shop"
    >
      <SectionHeader title="Shop By Top Categories" />
      <section className="grid grid-cols-2 md:grid-cols-3 lg:flex items-center gap-4 mt-8">
        {CATEGORIES.map((category) => {
          return <Point key={category.name} {...category} number />;
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
