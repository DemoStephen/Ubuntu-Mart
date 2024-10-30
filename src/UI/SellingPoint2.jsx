import assets from "../assets/avatar3.png";
import Point2 from "../components/Point2";
export default function SellingPoint2() {
  return (
    <section
      style={{ backgroundImage: `url(${assets})` }}
      className="relative px-[5%] md:px-[10%] lg:px-[10%] py-16 bg-cover bg-red-400 bg-center bg-no-repeat flex md:grid md:grid-cols-2 lg:flex lg:flex-row flex-col items-center justify-between gap-4"
    >
      <Point2 number={37 + "+"} text="Years of Hard Work" />
      <Point2 number={500 + "k+"} text="Happy Customers" />
      <Point2 number={28} text="Qualified Team Members" />
      <Point2 number={750 + "k+"} text="Monthly Orders" />
    </section>
  );
}
