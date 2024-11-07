/* eslint-disable react/prop-types */
import AddToCartButton from "./AddToCartButton";
import AddToFavorite from "./AddtoFavoriteButton";
import Rating from "./Rating";

export default function ProductDetail({ ...props }) {
  let newPrice = +props.price;

  if (+props.discount > 0) {
    newPrice = newPrice - newPrice * (props.discount / 100);
  }
  return (
    <div>
      <p className="group-hover:text-green-500  font-semibold">
        {props.name || "Error Name"}
      </p>
      <div
        className={
          props.specialDeal ? "p-1 h-11 group-hover:hidden" : "p-1 h-11"
        }
      >
        <p className="flex gap-4 text-xl -mt-1">
          <span>
            ${isNaN(newPrice.toFixed(2)) ? "Error Price" : newPrice.toFixed(2)}
          </span>
          {props.discount > 0 && props.discount && (
            <span className="text-red-600 line-through">
              {isNaN(props.price.toFixed(2))
                ? "Error Discount"
                : props.price.toFixed(2)}
            </span>
          )}
        </p>
        <Rating />
      </div>
      {props.specialDeal && (
        <div className="hidden gap-2 h-11 group-hover:flex">
          <AddToCartButton deals />
          <AddToFavorite deals />
        </div>
      )}
    </div>
  );
}
