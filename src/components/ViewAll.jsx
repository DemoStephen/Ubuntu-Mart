import Icon from "./Icon";
export default function ViewAll() {
  return (
    <button className="flex items-center gap-2 text-orange-500">
      View All{" "}
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
