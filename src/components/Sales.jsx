/* eslint-disable react/prop-types */
import ButtonShopNow from "./ButtonShopNow";
export default function Sales({ children, ...props }) {
  return (
    <div
      style={{ backgroundImage: ` url(${props.image})` }}
      className="bg-center bg-cover w-full p-8 py-14 text-white rounded-lg z-10"
    >
      <p>{props.point}</p>
      <h3 className="text-2xl">{props.title}</h3>
      {children}
      <ButtonShopNow />
    </div>
  );
}
