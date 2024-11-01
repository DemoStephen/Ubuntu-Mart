/* eslint-disable react/prop-types */
import Icon from "./Icon";
export default function Sales({ children, ...props }) {
  return (
    <div
      style={{ backgroundImage: ` url(${props.image})` }}
      className="bg-center bg-cover w-full p-8 py-14 text-white rounded-lg z-10"
    >
      <p>{props.point}</p>
      <h3 className="text-2xl">{props.title}</h3>
      {children}
      <button className="flex items-center gap-2 bg-orange-500 py-2 px-8 rounded-full">
        Shop Now
        <Icon>
          <path
            d="M4 12H20M20 12L16 8M20 12L16 16"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Icon>
      </button>
    </div>
  );
}
