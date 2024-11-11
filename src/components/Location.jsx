import Select from "./Select";
import { LANGUAGE_CURRENCY } from "../util/database";
import { LocationIcon } from "./SVGs";
export default function Location() {
  return (
    <div className="flex items-center justify-center md:justify-between bg-gray-50 py-2 px-[5%] md:px-[10%] text-xs ">
      <p className="flex items-center gap-2">
        <span>
          <LocationIcon />
        </span>
        <span>Store Location: Egbeda - 344, Iyanapaja, Nigeria</span>
      </p>
      <p className="hidden md:flex items-center gap-2">
        <Select data={LANGUAGE_CURRENCY.LANGUAGES} />
        <Select data={LANGUAGE_CURRENCY.CURRENCIES} />
      </p>
    </div>
  );
}
