import partner1 from "../assets/images/logo/bookoff.png";
import partner2 from "../assets/images/logo/food.png";
import partner3 from "../assets/images/logo/food2.png";
import partner4 from "../assets/images/logo/G series.png";
import partner5 from "../assets/images/logo/steps.png";
import partner6 from "../assets/images/logo/mango.png";

import Form from "../components/Form";
export default function Partners() {
  return (
    <section className="px-[10%] py-10">
      <div className="full grid grid-cols-3 md:grid-cols-6 items-center justify-center gap-2 md:gap-8">
        <img src={partner1} alt="partner1" className="w-3/4" />
        <img src={partner2} alt="partner2" className="w-3/4" />
        <img src={partner3} alt="partner3" className="w-3/4" />
        <img src={partner4} alt="partner4" className="w-3/4" />
        <img src={partner5} alt="partner5" className="w-3/4" />
        <img src={partner6} alt="partner1" className="w-3/4" />
      </div>
      <section className="flex flex-col md:grid md:grid-cols-4 gap-8">
        <div className="p-4 shadow-md">
          <h4>Our Location</h4>
          <p>1901 Thornridge Cir. Shiloh, Washington DC 20020, United States</p>
        </div>
        <div className="p-4 shadow-md">
          <h4>Call Us 24/7</h4>
          <p className="text-2xl">(234) 555-0105</p>
        </div>

        <div className="p-4 col-span-2 shadow-md">
          <h4 className="text-2xl">Subscribe Newsletter</h4>
          <Form />
        </div>
      </section>
    </section>
  );
}
