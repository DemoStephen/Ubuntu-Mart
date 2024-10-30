import Select from "./Select";
import { CURRENCIES, LANGUAGES } from "../util/data";
export default function Location() {
  return (
    <div className="flex items-center justify-center md:justify-between bg-gray-50 py-2 px-[5%] md:px-[10%] text-xs ">
      <p className="flex items-center gap-2">
        <span>
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="//www.w3.org/2000/svg"
          >
            <path
              d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
              stroke="#000000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
              stroke="#000000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>Store Location: Egbeda - 344, Iyanapaja, Nigeria</span>
      </p>
      <p className="hidden md:flex items-center gap-2">
        <Select data={LANGUAGES} />
        <Select data={CURRENCIES} />
      </p>
    </div>
  );
}
