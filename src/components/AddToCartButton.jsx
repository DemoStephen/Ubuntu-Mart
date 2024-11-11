/* eslint-disable react/prop-types */
import { AddToCartIcon } from "./SVGs";
export default function AddToCartButton({ deals }) {
  let classes = "hover:invert";
  if (deals) {
    classes += " p-2";
  } else {
    classes += " p-3";
  }
  return (
    <button className="rounded-full overflow-hidden bg-gray-200 hover:bg-orange-500">
      <p className={classes}>
        <AddToCartIcon deals={deals} />
      </p>
    </button>
  );
}
