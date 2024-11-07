import Blog from "./Blog";
import news1 from "../assets/images/images/news1.png";
import news2 from "../assets/images/images/news2.png";
import news3 from "../assets/images/images/news3.png";
import vector1 from "../assets/images/Vector/vector_assets18.png";
import vector2 from "../assets/images/Vector/vector_assets19.png";
import vector3 from "../assets/images/Vector/vector_assets20.png";
import vector4 from "../assets/images/Vector/vector_assets21.png";
import vector5 from "../assets/images/Vector/vector_assets22.png";
import vector6 from "../assets/images/Vector/vector_assets23.png";

export default function Blogs() {
  return (
    <section
      className="relative md:px-[10%] py-16 bg-slate-100 overflow-hidden"
      id="blog"
    >
      <header className="text-center mb-8">
        <p className="uppercase text-orange-500">BLOGS</p>
        <h2 className="text-4xl font-medium">Latest News</h2>
      </header>
      <section className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        <Blog image={news1} />
        <Blog image={news2} />
        <Blog image={news3} />
      </section>
      <img
        src={vector1}
        alt="vectors"
        className="animate-pulse md:block hidden absolute right-8 w-20 top-1/2 "
      />
      <img
        src={vector2}
        alt="vectors"
        className="animate-pulse absolute md:block hidden right-0 w-40 top-[20%]"
      />
      <img
        src={vector3}
        alt="vectors"
        className="animate-pulse md:block hidden absolute right-[20%] top-0 w-20"
      />
      <img
        src={vector4}
        alt="vectors"
        className="animate-pulse md:block hidden absolute left-0 top-[20%] w-20"
      />
      <img
        src={vector5}
        alt="vectors"
        className="animate-pulse md:block hidden absolute left-0 top-[60%] w-32"
      />
      <img
        src={vector6}
        alt="vectors"
        className="animate-pulse md:block hidden absolute left-0 bottom-0 w-20"
      />
    </section>
  );
}
