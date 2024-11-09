/* eslint-disable react/prop-types */
import Icon from "./Icon";

export default function ButtonShopNow({ color }) {
  return (
    <a href="#shop">
      <button
        className={`flex items-center gap-2 py-2 px-8 rounded-full mt-4 w-full md:w-auto justify-center outline-none ${
          color ? "bg-slate-50 text-orange-500" : "bg-orange-500 text-slate-50"
        }`}
      >
        Shop Now
        {!color && (
          <Icon>
            <path
              d="M4 12H20M20 12L16 8M20 12L16 16"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Icon>
        )}
      </button>
    </a>
  );
}
