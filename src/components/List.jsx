// eslint-disable-next-line react/prop-types
export default function List({ name, href }) {
  return (
    <a href={href}>
      <li className="px-2 cursor-pointer hover:text-slate-700">{name}</li>
    </a>
  );
}
