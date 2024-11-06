/* eslint-disable react/prop-types */

import AddToCartButton from "./AddToCartButton";
import AddToFavorite from "./AddtoFavoriteButton";
import ProductDetail from "./ProductDetail";

export default function Product(props) {
  return (
    <div className="relative border-2 p-4 rounded-lg hover:shadow-lg hover:shadow-green-100  hover:border-green-400 cursor-pointer w-full overflow-hidden group">
      <AddToFavorite />
      <img src={props.image} alt={props.name} />
      <div className="flex items-center justify-between">
        <ProductDetail {...props} />
        <AddToCartButton />
      </div>
    </div>
  );
}
