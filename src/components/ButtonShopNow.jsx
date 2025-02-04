/* eslint-disable react/prop-types */
import { ArrowRight } from "./SVGs";
import { handleAlert } from "../util/function";
export default function ButtonShopNow({ color }) {
  return (
    <a href="#shop">
      <button
        onClick={handleAlert}
        className={`flex items-center gap-2 py-2 px-8 rounded-full mt-4 w-full md:w-auto justify-center outline-none ${
          color ? "bg-slate-50 text-orange-500" : "bg-orange-500 text-slate-50"
        }`}
      >
        Shop Now
        {!color && <ArrowRight />}
      </button>
    </a>
  );
}
