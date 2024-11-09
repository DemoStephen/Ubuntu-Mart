// import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
export default function Point2({ number, text, children }) {
  // const [value, setValue] = useState(0);
  // useEffect(() => {
  //   if (value === number) return;
  //   const intervalId = setInterval(() => {
  //     setValue((prev) => prev + 1);
  //   }, 2);
  //   return () => clearInterval(intervalId);
  // }, [value]);

  return (
    <div className="backdrop-brightness-200 px-14 lg:px-6 xl:px-14 py-8 text-center rounded-lg w-full lg:w-1/4 md:w-full">
      <h4 className="text-5xl mb-4 text-orange-500">
        {/* {value} */}
        {number}
        {children}
      </h4>
      <p className="text-white">{text}</p>
    </div>
  );
}
