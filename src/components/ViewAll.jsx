/* eslint-disable react/prop-types */
import Icon from "./Icon";
import { handleAlert } from "../util/function";
export default function ViewAll({ text }) {
  return (
    <button onClick={handleAlert} className="flex items-center gap-2 text-orange-500">
      {text ? text : "View All "}
      <Icon>
        <path
          d="M4 12H20M20 12L16 8M20 12L16 16"
          stroke="rgb(251 146 60)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Icon>
    </button>
  );
}
