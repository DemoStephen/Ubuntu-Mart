import Location from "../components/Location";
import SubNavigation from "./SubNavigation";

export default function Navigation() {
  return (
    <nav aria-label="Main Navigation">
      <Location />
      <SubNavigation />
    </nav>
  );
}
