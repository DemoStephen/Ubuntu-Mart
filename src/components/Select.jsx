/* eslint-disable react/prop-types */
import { handleAlert } from "../util/function";
export default function Select({ data }) {
  return (
    <button onClick={handleAlert}>
      <select
        name={data}
        className="bg-transparent flex flex-col items-center outline-none"
      >
        {data.map((option) => {
          return (
            <option value={option.code} key={option.name}>
              {option.code}
            </option>
          );
        })}
      </select>
    </button>
  );
}
