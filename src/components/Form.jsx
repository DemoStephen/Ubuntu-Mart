/* eslint-disable react/prop-types */
export default function Form({ color }) {
  let classList = "p-2 rounded-full md:w-1/3 text-white";
  if (color) {
    classList += " bg-green-500 ";
  } else {
    classList += " bg-orange-500 ";
  }
  return (
    <>
      <form
        action="#"
        className="flex flex-col md:flex-row md:border-2 border-slate-200 bg-slate-50 outline-none rounded-3xl md:rounded-full overflow-hidden p-1 gap-2 w-full"
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email address Subscribe"
          className="p-2 w-full outline-none text-center md:text-left"
        />
        <button className={classList}>Subscribe</button>
      </form>
    </>
  );
}
