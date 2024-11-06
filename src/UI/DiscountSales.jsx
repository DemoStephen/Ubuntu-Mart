import Sales from "../components/Sales";
import discount from "../assets/images/images/discount1.png";
import vector from "../assets/images/Vector/vector_assets17.png";
import vector2 from "../assets/images/Vector/vector_assets2.png";
import vector3 from "../assets/images/Vector/vector_assets5.png";
import Timer from "../components/Timer";
import countdown from "../assets/images/images/discount2.png";

export default function DiscountSales() {
  return (
    <section className="relative flex flex-col md:flex-row px-[5%] md:px-[10%] py-16 gap-8">
      <img src={vector} alt="vector" className="absolute top-0 right-0 w-40" />
      <Sales image={discount} title="Fruit & Vegetable" point="100% ORGANIC">
        <div className="my-4 flex items-center gap-4">
          <span>Starting at: </span>
          <span className="bg-orange-500 text-white px-2 py-1 rounded-md">
            $11.99
          </span>
        </div>
      </Sales>
      <Sales
        image={countdown}
        title="Sales of the Year"
        point="Father christmas week"
      >
        <Timer />
      </Sales>

      <img src={vector2} alt="pear" className="absolute top-8 left-0 w-40" />
      <img
        src={vector3}
        alt="onion"
        className="absolute -bottom-20 left-4 w-40"
      />
    </section>
  );
}
