import fruits from "../assets/images/images/fruth.png";
import vector1 from "../assets/images/Vector/vector_assets1.png";
import vector2 from "../assets/images/Vector/vector_assets2.png";
import vector3 from "../assets/images/Vector/vector_assets3.png";
import vector4 from "../assets/images/Vector/vector_assets4.png";
import vector5 from "../assets/images/Vector/vector_assets5.png";
import vector6 from "../assets/images/Vector/vector_assets6.png";
import vector7 from "../assets/images/Vector/vector_assets7.png";
import vector8 from "../assets/images/Vector/vector_assets8.png";
import Icon from "../components/Icon";
export default function Header() {
  return (
    <header className="md:flex items-center px-[10%] py-8 md:py-4 bg-gray-50 gap-4 relative overflow-hidden">
      <div className="md:w-1/2">
        <img
          src={fruits}
          alt="A wicker basket filled with a variety of fresh fruits and vegetables, including apples, oranges, grapes, bananas, pineapple, lettuce, carrots, bell peppers, and tomatoes, arranged in a colorful and vibrant display."
          className="w-full"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <p className="uppercase text-orange-400">Welcome to Ubuntumart</p>
        <h1 className="lg:text-5xl text-4xl font-semibold lg:mb-4 lg:pr-10">
          Fresh & Healthy Organic Food
        </h1>
        <p className="lg:text-2xl text-xl font-semibold my-2">
          Sale up to <span className="text-orange-400">30% OFF</span>
        </p>
        <p className="my-2">
          Free shipping on all your order. we deliver, you enjoy
        </p>
        <button className="flex items-center bg-orange-400 text-white gap-4 py-2 px-6 lg:px-8 rounded-full lg:mt-4 md:m-0 m-auto group">
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
        src={vector1}
        alt="header assets"
        className="absolute top-0 right-0 w-20"
      />
      <img
        src={vector2}
        alt="header assets"
        className="absolute bottom-1/3 md:bottom-8 w-20 md:w-28 left-2 md:left-8"
      />
      <img
        src={vector3}
        alt="header assets"
        className="absolute top-8 md:top-1/4 w-20 md:w-24 left-1 md:left-10"
      />
      <img
        src={vector4}
        alt="header assets"
        className="absolute top-0 left-1/2 w-20 animate-pulse"
      />
      <img
        src={vector5}
        alt="header assets"
        className="absolute right-[1rem] md:left-3/4 w-16 md:w-24 md:top-[4rem] top-1/2 animate-pulse"
      />
      <img
        src={vector6}
        alt="header assets"
        className="absolute bottom-0 right-0 w-20 md:w-28 animate-pulse"
      />
      <img
        src={vector7}
        alt="header assets"
        className="absolute top-[-2rem] rotate-180 w-20 blur-[1px] animate-pulse"
      />
      <img
        src={vector8}
        alt="header assets"
        className="absolute bottom-0 md:left-1/4  animate-bounce"
      />
    </header>
  );
}
