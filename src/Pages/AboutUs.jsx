import Location from "../components/Location";
import { Bag, LoveIcon } from "../components/SVGs";
import Search from "../UI/Search";
import SubNavigation from "../UI/SubNavigation";

export default function AboutUs() {
  return (
    <>
      <nav>
        <Location AboutUs />
        <div className="lg:px-[10%] px-[5%] py-3 border flex items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between">
          <div className="lg:col-start-2">
            <Search />
          </div>
          <div className="flex items-center gap-2 lg:gap-4 justify-end">
            <LoveIcon />
            <hr className="h-full border py-3" />
            <div className="flex items-center justify-center gap-2">
              <Bag />
              <p className="hidden md:flex flex-col">
                <span className="text-xs">Shopping Cart</span>
                <b className="text-sm">$57.00</b>
              </p>
            </div>
          </div>
        </div>
        <SubNavigation AboutUs />
      </nav>
    </>
  );
}
