/* eslint-disable react/prop-types */
import ProductDetail from "../components/ProductDetail";

export default function Deal({ ...props }) {
  return (
    <article className="group flex items-center justify-between px-4 py-2 border-2 border-green-400 hover:shadow-lg hover:shadow-green-100  hover:border-green-600 rounded-lg cursor-pointer">
      <img src={props.image} alt="" className="w-20" />
      <ProductDetail {...props} specialDeal />
    </article>
  );
}
