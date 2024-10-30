/* eslint-disable react/prop-types */
export default function Select({ data }) {
  return (
    <button>
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
