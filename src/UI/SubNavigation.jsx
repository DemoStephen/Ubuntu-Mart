import Contact from "../components/Contact";
import Icon from "../components/Icon";
import List from "../components/List";
import logo from "../assets/images/logo.png";
export default function SubNavigation() {
  return (
    <nav
      aria-label="Services Sub-navigation"
      className="flex items-center justify-between py-4 px-[5%] md:px-[10%] bg-white shadow-sm"
    >
      <div className="w-10 lg:hidden">
        <img src={logo} alt="logo" className="w-full" />
      </div>
      <ul className="hidden lg:flex items-center gap-3">
        <List name="Home" />
        <List name="Shop" />
        <List name="Pages" />
        <List name="Blog" />
        <List name="About Us" />
      </ul>
      <div className="flex items-center gap-4 md:gap-8">
        <Contact />
        <div className="lg:hidden">
          <Icon>
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#000000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Icon>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <Icon>
            <>
              <g clipPath="url(#clip0_15_152)">
                <rect width="24" height="24" fill="none" />
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="6.5"
                  stroke="#000000"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                  fill="#000000"
                />
              </g>
              <defs>
                <clipPath id="clip0_15_152">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </>
          </Icon>
          <Icon>
            <>
              <path
                d="M12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5"
                stroke="#000"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M12 5.50063C16.4998 0.825464 22 4.27416 22 9.1371C22 14 17.9806 16.5914 15.0383 18.9109C14 19.7294 13 20.5 12 20.5"
                stroke="#000"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </>
          </Icon>
          <Icon>
            <>
              <path
                d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6"
                stroke="#000"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M9.1709 15C9.58273 16.1652 10.694 17 12.0002 17C13.3064 17 14.4177 16.1652 14.8295 15"
                stroke="#000"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M20.2235 12.5257C19.6382 9.40452 19.3456 7.84393 18.2347 6.92196C17.1238 6 15.5361 6 12.3605 6H11.6393C8.46374 6 6.87596 6 5.76506 6.92196C4.65416 7.84393 4.36155 9.40452 3.77633 12.5257C2.9534 16.9146 2.54194 19.1091 3.74157 20.5545C4.94119 22 7.17389 22 11.6393 22H12.3605C16.8259 22 19.0586 22 20.2582 20.5545C20.9542 19.7159 21.1079 18.6252 20.9536 17"
                stroke="#000"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </>
          </Icon>
          <Icon>
            <>
              <path
                d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z"
                stroke="#000"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z"
                stroke="#000"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          </Icon>
        </div>
      </div>
    </nav>
  );
}
