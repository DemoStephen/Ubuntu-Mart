/* eslint-disable react/prop-types */
import Select from "./Select";
import { LANGUAGE_CURRENCY } from "../util/database";
import { LocationIcon } from "./SVGs";
export default function Location({ AboutUs }) {
  let classNames =
    "flex items-center justify-center md:justify-between py-2 px-[5%] md:px-[10%] text-xs ";
  if (AboutUs) {
    classNames += "  bg-gray-600 text-gray-100";
  } else {
    classNames += " bg-gray-50";
  }
  return (
    <div className={classNames}>
      <p className="flex items-center gap-2">
        <span>
          <LocationIcon />
        </span>
        <span>Store Location: Shipeolu - 60, Palmgroove, Nigeria</span>
      </p>
      <div className="flex items-center gap-4">
        <p className="hidden md:flex items-center gap-2">
          <Select data={LANGUAGE_CURRENCY.LANGUAGES} />
          <Select data={LANGUAGE_CURRENCY.CURRENCIES} />
        </p>
        {AboutUs && (
          <>
            <hr className="h-full border py-2" />
            <p className="hidden md:flex items-center gap-2">
              <button className="p-1">Sign In</button> /{" "}
              <button className="p-1">Sign In</button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
