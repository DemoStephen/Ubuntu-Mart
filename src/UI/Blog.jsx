/* eslint-disable react/prop-types */
import Icon from "../components/Icon";
import { CommentsIcon, PersonIcon, TagIcon } from "../components/SVGs";
import Tagline from "../components/Tagline";
import ViewAll from "../components/ViewAll";
export default function Blog({ image }) {
  return (
    <div className="bg-slate-50 rounded-lg shadow-md group">
      <div className="relative">
        <img src={image} alt="news" className="w-full" />
        <span className="absolute bottom-4 left-4 inline-flex flex-col items-center bg-slate-50 px-3 py-2 rounded-md font-semibold">
          <span>18</span>
          <span className="text-xs uppercase text-gray-400">Nov</span>
        </span>
      </div>
      <div className="flex items-center gap-3 p-4 py-4 md:text-xs lg:text-[0.6rem] xl:text-sm text-gray-500">
        <Tagline>
          <TagIcon />
          <span>Food</span>
        </Tagline>
        <Tagline>
          <PersonIcon/>
          <span>By Admin</span>
        </Tagline>
        <Tagline>
          <CommentsIcon />
          <span>65 Comments</span>
        </Tagline>
      </div>
      <div className="px-4 pb-4">
        <p className="pb-2 group-hover:text-green-500 text-sm">
          Curabitur porttitor orci eget neque accumsan venenatis. Nunc
          fermentum.
        </p>
        <a href="#">
          <ViewAll text="Read More" />
        </a>
      </div>
    </div>
  );
}
