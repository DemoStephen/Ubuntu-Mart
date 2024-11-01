import Sales from "../components/Sales";
import discount from "../assets/discount1.png";
import countdown from "../assets/discount2.png";
import vector from "../assets/vector2.png";
import vector2 from "../assets/headerasset2.png";
import vector3 from "../assets/headerasset5.png";

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
        <div className="my-4 flex items-start gap-2">
          <div className="flex flex-col text-center">
            <span className="text-2xl">00</span>
            <span className="text-[0.65rem]">Days</span>
          </div>
          <span className="text-2xl">:</span>
          <div className="flex flex-col text-center">
            <span className="text-2xl">03</span>
            <span className="text-[0.65rem]">Hours</span>
          </div>
          <span className="text-2xl">:</span>
          <div className="flex flex-col text-center">
            <span className="text-2xl">00</span>
            <span className="text-[0.65rem]">Mins</span>
          </div>
          <span className="text-2xl">:</span>
          <div className="flex flex-col text-center">
            <span className="text-2xl">00</span>
            <span className="text-[0.65rem]">Secs</span>
          </div>
        </div>
      </Sales>
      <img src={vector2} alt="pear" className="absolute top-8 left-0 w-40" />
      <img src={vector3} alt="onion" className="absolute" />
    </section>
  );
}
