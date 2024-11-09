export default function Form() {
  return (
    <>
      <form
        action="#"
        className="flex flex-col md:flex-row md:border-2 border-orange-500 outline-none md:rounded-full overflow-hidden p-1 gap-2"
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email address Subscribe"
          className="p-3 w-full outline-none "
        />
        <button className="p-3 bg-orange-500 rounded-full md:w-1/3 text-white">
          Subscribe
        </button>
      </form>
    </>
  );
}
