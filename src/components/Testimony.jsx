import Rating from "./Rating";

export default function Testimony() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p>
        Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
        Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.
        Donec sed neque eget
      </p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <img
            src="#"
            alt="image"
            className="w-12 h-12 bg-slate-700 rounded-full"
          />
          <header>
            <h4>Robert Fox</h4>
            <p className="text-sm">Trader</p>
          </header>
        </div>
        <Rating rate={5} />
      </div>
    </div>
  );
}
