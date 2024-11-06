/* eslint-disable react/prop-types */
import Icon from "./Icon";

export default function AddToFavorite({ deals }) {
  const buttonClass = "bg-slate-50 hover:bg-green-500 rounded-full";
  let containerClass = "flex gap-2";

  if (!deals) {
    containerClass +=
      "  duration-500 absolute -top-32 group-hover:top-4 right-4 flex-col";
  }
  return (
    <div className={containerClass}>
      <button className={buttonClass}>
        <p className="hover:invert p-2">
          <Icon>
            <path
              d="M12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5"
              stroke="#000"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <path
              d="M12 5.50063C16.4998 0.825464 22 4.27416 22 9.1371C22 14 17.9806 16.5914 15.0383 18.9109C14 19.7294 13 20.5 12 20.5"
              stroke="#000"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </Icon>
        </p>
      </button>
      <button className={buttonClass}>
        <p className="hover:invert p-2">
          <Icon>
            <path
              d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
              stroke="#000"
              strokeWidth="1"
            />
            <path
              d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
              stroke="#000"
              strokeWidth="1"
            />
          </Icon>
        </p>
      </button>
    </div>
  );
}
