import partner1 from "../assets/images/logo/bookoff.png";
import partner2 from "../assets/images/logo/food.png";
import partner3 from "../assets/images/logo/food2.png";
import partner4 from "../assets/images/logo/G series.png";
import partner5 from "../assets/images/logo/steps.png";
import partner6 from "../assets/images/logo/mango.png";

import location from "../assets/images/png/location.png";
import call from "../assets/images/png/call.png";
import message from "../assets/images/png/message.png";

import Form from "../components/Form";
export default function Partners() {
  return (
    <section className="px-[10%] py-10">
      <div className="full grid grid-cols-3 md:grid-cols-6 items-center justify-center gap-2 md:gap-8">
        <img src={partner5} alt="partner5" className="w-3/4" />
        <img src={partner1} alt="partner1" className="w-3/4" />
        <img src={partner2} alt="partner2" className="w-3/4" />
        <img src={partner3} alt="partner3" className="w-3/4" />
        <img src={partner4} alt="partner4" className="w-3/4" />
        <img src={partner6} alt="partner6" className="w-3/4" />
      </div>
      <section className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
        <div className="p-3 border-green-200 rounded-lg border">
          <img src={location} alt="" />
          <h4 className="uppercase my-2 font-semibold">Our Location</h4>
          <p className="text-sm">
            1901 Thornridge Cir. Shiloh, Washington DC 20020, United States
          </p>
        </div>
        <div className="p-3 border-green-200 rounded-lg border">
          <img src={call} alt="" />
          <h4 className="uppercase my-2 font-semibold">Call Us 24/7</h4>
          <p className="text-2xl text-orange-500">(234) 903 0094 270</p>
        </div>
        <div className="p-3 col-span-2 border-green-200 rounded-lg border">
          <img src={message} alt="" />
          <h4 className="uppercase my-2 font-semibold">Subscribe Newsletter</h4>
          <Form />
        </div>
      </section>
    </section>
  );
}
