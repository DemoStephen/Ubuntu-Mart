import asset1 from "../assets/images/images/avatar1.png";
import asset2 from "../assets/images/images/avatar2.png";

import vector1 from "../assets/images/Vector/vector_assets14.png";
import vector2 from "../assets/images/Vector/vector_assets13.png";
import vector3 from "../assets/images/Vector/vector_assets12.png";
import vector4 from "../assets/images/Vector/vector_assets11.png";
import vector5 from "../assets/images/Vector/vector_assets10.png";
import vector6 from "../assets/images/Vector/vector_assets16.png";
export default function Trust() {
  return (
    <section className="relative px-[10%] py-10 bg-gray-50 flex items-center gap-8 justify-between flex-col md:flex-row">
      <div className="flex items-start gap-4 w-full md:w-1/3 lg:w-3/5 overflow-hidden rounded-lg flex-col md:flex-row z-10">
        <img
          src={asset2}
          alt="delivery truck"
          className="w-fit  lg:flex hidden"
        />
        <img src={asset1} alt="Our farmers harvesting" className="w-fit" />
      </div>
      <div className="md:w-2/3 lg:w-2/5">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:text-left text-center">
          100% Trusted Organic Food Store
        </h2>
        <div className="flex items-start gap-4">
          <span className="p-2 mt-2 bg-orange-500 rounded-full"></span>
          <div className="mb-4">
            <h4 className="mb-2 text-xl font-semibold">
              Healthy & natural food for lovers of healthy food.
            </h4>
            <p>
              Ut quis tempus erat. Phasellus euismod bibendum magna non
              tristique. Pellentesque semper vestibulum elit sed condimentum.
              Nunc pretium fermentum interdum.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="p-2 mt-2 bg-orange-500 rounded-full"></span>
          <div className="mb-4">
            <h4 className="mb-2 text-xl font-semibold">
              Every day fresh and quality products for you.
            </h4>
            <p>
              Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a
              posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis
              felis. Sed vestibulum nisl sit amet sapien.
            </p>
          </div>
        </div>
        <button className="bg-orange-500 px-12 py-3 rounded-full text-white font-semibold w-full md:w-auto mt-8 md:mt-4">
          Shop Now
        </button>
      </div>

      <img src={vector6} alt="vector" className="absolute top-0 left-0" />
      <img
        src={vector1}
        alt="componet images"
        className="absolute bottom-0 right-[20%] w-20"
      />
      <img
        src={vector2}
        alt="componet images"
        className="absolute top-1/4 right-4 md:w-fit w-24"
      />
      <img
        src={vector3}
        alt="componet images"
        className="absolute md:bottom-8 bottom-1/4 md:right-auto right-0 w-20"
      />
      <img
        src={vector4}
        alt="componet images"
        className="absolute top-3/4 left-4 md:w-20 w-10"
      />
      <img
        src={vector5}
        alt="componet images"
        className="absolute -top-10 right-1/4"
      />
    </section>
  );
}
