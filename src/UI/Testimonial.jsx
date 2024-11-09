import Testimony from "../components/Testimony";

export default function Testimonial() {
  return (
    <section className="px-[10%] py-16 bg-slate-50">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <header className="text-center md:text-left">
          <p className="text-orange-500 uppercase">Testimonial</p>
          <h2 className="text-3xl font-bold">What Our Customer Says</h2>
        </header>
        <div>arrow left and arrow right</div>
      </div>
      <section className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        <Testimony />
        <Testimony />
        <Testimony />
      </section>
    </section>
  );
}
