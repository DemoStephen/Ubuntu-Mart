/* eslint-disable react/prop-types */
import Rating from "./Rating";

export default function ProductDetail({ ...props }) {
  let newPrice = +props.price;

  if (+props.discount > 0) {
    newPrice = newPrice * (props.discount / 100);
  }
  return (
    <div>
      <p>{props.name}</p>
      <p className="flex gap-4 text-xl -mt-1">
        <span>${newPrice.toFixed(2)}</span>
        {props.discount > 0 && props.discount && (
          <span className="text-slate-500 line-through">
            {props.price.toFixed(2)}
          </span>
        )}
      </p>
      <Rating />
    </div>
  );
}
