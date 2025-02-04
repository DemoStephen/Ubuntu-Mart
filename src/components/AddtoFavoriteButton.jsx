/* eslint-disable react/prop-types */
import { LoveIcon, ViewIcon } from "./SVGs";
import { handleAlert } from "../util/function";
export default function AddToFavorite({ deals }) {
  const buttonClass = "bg-slate-50 hover:bg-green-500 rounded-full";
  let containerClass = "flex gap-2";

  if (!deals) {
    containerClass +=
      "  duration-500 absolute -top-32 group-hover:top-4 right-4 flex-col";
  }
  return (
    <div className={containerClass}>
      <button onClick={handleAlert} className={buttonClass}>
        <p className="hover:invert p-2">
          <LoveIcon />
        </p>
      </button>
      <button onClick={handleAlert} className={buttonClass}>
        <p className="hover:invert p-2">
          <ViewIcon />
        </p>
      </button>
    </div>
  );
}
