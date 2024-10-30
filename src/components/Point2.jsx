/* eslint-disable react/prop-types */
export default function Point2({ number, text }) {
  return (
    <div className="backdrop-brightness-200 px-14 py-8 text-center rounded-lg w-full lg:w-1/4 md:w-full">
      <h4 className="text-5xl mb-4 text-orange-500">{number}</h4>
      <p className="text-white">{text}</p>
    </div>
  );
}
