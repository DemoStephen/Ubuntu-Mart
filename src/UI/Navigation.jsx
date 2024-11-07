import Location from "../components/Location";
import SubNavigation from "./SubNavigation";

export default function Navigation() {
  return (
    <nav aria-label="Main Navigation" className="sticky top-0 w-full z-20">
      <Location />
      <SubNavigation />
    </nav>
  );
}
