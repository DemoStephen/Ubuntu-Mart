import basketFruth from "../assets/fruth.png";
import asset1 from "../assets/headerasset1.png";
import asset2 from "../assets/headerasset2.png";
import asset3 from "../assets/headerasset3.png";
import asset4 from "../assets/headerasset4.png";
import asset5 from "../assets/headerasset5.png";
import asset6 from "../assets/headerasset6.png";
import asset7 from "../assets/headerasset7.png";
import asset8 from "../assets/headerasset8.png";
import Icon from "../components/Icon";
export default function Header() {
  return (
    <header className="md:flex items-center px-[10%] py-8 md:py-4 bg-gray-50 gap-4 relative overflow-hidden">
      <div className="md:w-1/2">
        <img
          src={basketFruth}
          alt="A wicker basket filled with a variety of fresh fruits and vegetables, including apples, oranges, grapes, bananas, pineapple, lettuce, carrots, bell peppers, and tomatoes, arranged in a colorful and vibrant display."
          className="w-full"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <p className="uppercase text-orange-400">Welcome to Ubuntumart</p>
        <h1 className="md:text-6xl text-4xl font-semibold mb-4 md:pr-8">
          Fresh & Healthy Organic Food
        </h1>
        <p className="md:text-2xl text-xl font-semibold">
          Sale up to <span className="text-orange-400">30% OFF</span>
        </p>
        <p className="my-2">
          Free shipping on all your order. we deliver, you enjoy
        </p>
        <button className="flex items-center bg-orange-400 text-white gap-4 py-2 px-8 rounded-full md:mt-4 md:m-0 m-auto group">
          Shop now
          <Icon>
            <path
              d="M4 12H20M20 12L16 8M20 12L16 16"
              stroke="#ffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Icon>
        </button>
      </div>
      <img
        src={asset1}
        alt="header assets"
        className="absolute top-0 right-0 w-20"
      />
      <img
        src={asset2}
        alt="header assets"
        className="absolute bottom-1/3 md:bottom-8 w-20 md:w-28 left-2 md:left-8"
      />
      <img
        src={asset3}
        alt="header assets"
        className="absolute top-8 md:top-1/4 w-20 md:w-24 left-1 md:left-10"
      />
      <img
        src={asset4}
        alt="header assets"
        className="absolute top-0 left-1/2 w-20 animate-pulse"
      />
      <img
        src={asset5}
        alt="header assets"
        className="absolute right-[1rem] md:left-3/4 w-16 md:w-24 md:top-[4rem] top-1/2 animate-pulse"
      />
      <img
        src={asset6}
        alt="header assets"
        className="absolute bottom-0 right-0 w-20 md:w-28 animate-pulse"
      />
      <img
        src={asset7}
        alt="header assets"
        className="absolute top-[-2rem] rotate-180 w-20 blur-[1px] animate-pulse"
      />
      <img
        src={asset8}
        alt="header assets"
        className="absolute bottom-0 md:left-1/4  animate-bounce"
      />
    </header>
  );
}
