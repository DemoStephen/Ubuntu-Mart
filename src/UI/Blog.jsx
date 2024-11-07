/* eslint-disable react/prop-types */
import Icon from "../components/Icon";
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
      <div className="flex items-center gap-3 p-4 py-4 text-sm text-gray-500">
        <Tagline>
          <Icon width={20}>
            <path
              d="M12.32 19.98C11.74 19.98 11.16 19.76 10.72 19.32L4.24 12.85C4.1 12.71 4.02 12.52 4.02 12.32V4.77002C4.02 4.36002 4.36 4.02002 4.77 4.02002H12.31C12.51 4.02002 12.7 4.10002 12.84 4.24002L19.32 10.72C20.19 11.6 20.19 13.03 19.32 13.91L13.91 19.32C13.47 19.76 12.89 19.98 12.31 19.98H12.32ZM5.52 12.01L11.78 18.26C12.08 18.55 12.56 18.55 12.85 18.26L18.26 12.85C18.55 12.56 18.55 12.08 18.26 11.78L12 5.52002H5.52V12V12.01ZM8.5 9.75002C7.81 9.75002 7.25 9.19002 7.25 8.50002C7.25 7.81002 7.81 7.25002 8.5 7.25002C9.19 7.25002 9.75 7.81002 9.75 8.50002C9.75 9.19002 9.19 9.75002 8.5 9.75002Z"
              fill="gray"
            />
          </Icon>
          <span>Food</span>
        </Tagline>
        <Tagline>
          <Icon width={20}>
            <path
              d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z"
              stroke="gray"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z"
              stroke="gray"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Icon>
          <span>By Admin</span>
        </Tagline>
        <Tagline>
          <Icon width={20}>
            <path
              d="M10.5238 14.2728L9.48206 16.0087C9.43209 16.092 9.36139 16.1609 9.27687 16.2088C9.19234 16.2566 9.09686 16.2818 8.99972 16.2818C8.90258 16.2818 8.8071 16.2566 8.72257 16.2088C8.63804 16.1609 8.56735 16.092 8.51738 16.0087L7.47675 14.2728C7.42671 14.1895 7.35596 14.1206 7.27138 14.0728C7.1868 14.025 7.09128 13.9999 6.99413 14H2.8125C2.66332 14 2.52024 13.9407 2.41475 13.8352C2.30926 13.7298 2.25 13.5867 2.25 13.4375V4.4375C2.25 4.28832 2.30926 4.14524 2.41475 4.03975C2.52024 3.93426 2.66332 3.875 2.8125 3.875H15.1875C15.3367 3.875 15.4798 3.93426 15.5852 4.03975C15.6907 4.14524 15.75 4.28832 15.75 4.4375V13.4375C15.75 13.5867 15.6907 13.7298 15.5852 13.8352C15.4798 13.9407 15.3367 14 15.1875 14H11.0059C10.9088 14 10.8134 14.0252 10.7289 14.073C10.6445 14.1208 10.5738 14.1896 10.5238 14.2728V14.2728Z"
              stroke="gray"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Icon>
          <span>65 Comments</span>
        </Tagline>
      </div>
      <div className="px-4 pb-4">
        <p className="pb-2 group-hover:text-green-500">
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
