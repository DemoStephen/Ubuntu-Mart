/* eslint-disable react/prop-types */
export default function Point({ image, name, text, number }) {
  let classNames =
    "flex md:flex-col items-center gap-4 md:text-center p-2 md:p-8 w-full cursor-pointer group";
  if (!number) {
    classNames +=
      " border-b-4 md:border-transparent md:hover:border-green-600 duration-300";
  } else {
    classNames +=
      " rounded-lg hover:shadow-lg hover:shadow-green-100 flex-col hover:border-green-500 md:border-2 text-center bg-white";
  }
  return (
    <div className={classNames}>
      <div>
        <img src={image} alt={name} className="md:block m-auto w-16" />
      </div>
      <div>
        <h4 className="font-bold group-hover:text-green-600">{name}</h4>
        <p className="text-sm">
          {text} {number && "Products"}
        </p>
      </div>
    </div>
  );
}
