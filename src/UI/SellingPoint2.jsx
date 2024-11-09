import Point2 from "../components/Point2";
import avatar from "../assets/images/images/avatar3.png";
export default function SellingPoint2() {
  return (
    <section
      style={{ backgroundImage: `url(${avatar})` }}
      className="relative px-[5%] md:px-[10%] lg:px-[5%] xl:px-[10%] py-16 bg-cover bg-red-400 bg-center bg-no-repeat flex md:grid md:grid-cols-2 lg:flex lg:flex-row flex-col items-center justify-between gap-4"
    >
      <Point2 number={37} text="Years of Hard Work">
        +
      </Point2>
      <Point2 number={500} text="Happy Customers">
        K+
      </Point2>
      <Point2 number={28} text="Qualified Members" />
      <Point2 number={750} text="Monthly Orders">
        K+
      </Point2>
    </section>
  );
}
