/* eslint-disable react/prop-types */
export default function Icon({ width, children }) {
  return (
    <span className="cursor-pointer">
      <svg
        width={width ? width : "28"}
        height={width ? width : "28"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="//www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </span>
  );
}
