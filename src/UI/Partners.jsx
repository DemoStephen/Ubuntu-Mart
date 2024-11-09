import company from "../assets/images/images/partner.png";
import Form from "../components/Form";
export default function Partners() {
  return (
    <section className="px-[10%] py-10">
      <div className="full flex items-center justify-between">
        <img src={company} alt="" className="w-full" />
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
