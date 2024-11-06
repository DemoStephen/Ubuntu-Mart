/* eslint-disable react/prop-types */
export default function TimerSection({ timeframe, value, last }) {
  return (
    <>
      <div className="flex flex-col text-center">
        <span className="text-2xl">{value}</span>
        <span className="text-[0.65rem]">{timeframe}</span>
      </div>
      {last ? "" : <span className="text-2xl">:</span>}
    </>
  );
}
