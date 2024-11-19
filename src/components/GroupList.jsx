/* eslint-disable react/prop-types */
import List from "./List";

export default function GroupList({ heading, lists }) {
  return (
    <div className="lg:w-[17.5%] text-center lg:text-left">
      <h3 className="mb-4 px-2">{heading}</h3>
      <ul className="text-gray-400 text-base flex flex-col gap-2">
        {lists.map((list, index) => {
          return <List key={index} name={list.name} href={list.href} />;
        })}
      </ul>
    </div>
  );
}
