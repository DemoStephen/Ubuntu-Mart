import { handleAlert } from "../util/function";

export default function Search() {
  return (
    <form
      onSubmit={handleAlert}
      className="border rounded-lg w-full overflow-hidden"
    >
      <input
        className="p-3 w-2/3 outline-none"
        type="search"
        name="search"
        id="search"
        placeholder="Search"
      />
      <button className="bg-orange-500 p-3 w-1/3 text-slate-50  outline-none">
        Search
      </button>
    </form>
  );
}
