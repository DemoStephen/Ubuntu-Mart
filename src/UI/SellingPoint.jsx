import Point from "../components/Point";
import customercare from "../assets/images/png/point1.png";
import shipping from "../assets/images/png/point2.png";
import cart from "../assets/images/png/point3.png";
import box from "../assets/images/png/point4.png";

export default function SellingPoint() {
  return (
    <section className="py-6 px-[10%]">
      <section className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row items-center gap-4 md:-mb-1">
        <Point
          title="Free Shipping"
          text="Free shipping with discount"
          image={shipping}
        />
        <Point
          title="Great Support 24/7"
          text="Instant access to Contact"
          image={customercare}
        />
        <Point
          title="100% Secure Payment"
          text="Your money is safe here"
          image={cart}
        />
        <Point
          title="Money-Back Guarantee"
          text="30 days money-back"
          image={box}
        />
      </section>
      <hr className="w-full border-2 hidden lg:flex" />
    </section>
  );
}
