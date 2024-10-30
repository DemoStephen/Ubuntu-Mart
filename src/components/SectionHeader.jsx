/* eslint-disable react/prop-types */
import ViewAll from "./ViewAll";
export default function SectionHeader({ title }) {
  return (
    <header className="flex items-center justify-between font-semibold">
      <h2 className="text-xl md:text-3xl">{title}</h2>
      <ViewAll />
    </header>
  );
}
