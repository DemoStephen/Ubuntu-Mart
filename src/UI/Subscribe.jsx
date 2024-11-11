import Form from "../components/Form";
import LinkedIn, { Facebook, Twitter, Whatsapp } from "../components/SVGs";

export default function Subscribe() {
  return (
    <section className="flex flex-col md:flex-row items-center px-[10%] py-12 gap-8 bg-slate-100">
      <header className="w-full md:w-1/3">
        <h2 className="font-semibold text-2xl">Subcribe our Newsletter</h2>
        <p className="text-sm">
          Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
          Phasellus imperdiet elit eu magna.
        </p>
      </header>
      <section className="w-full md:w-2/3 flex md:flex-row flex-col items-center gap-6">
        {/* <div className="md:flex hidden w-full"> */}
        <Form color />
        {/* </div> */}
        <div className="flex items-center gap-2 md:justify-start justify-center w-full md:w-auto">
          <Facebook />
          <LinkedIn />
          <Twitter />
          <Whatsapp />
        </div>
      </section>
    </section>
  );
}
