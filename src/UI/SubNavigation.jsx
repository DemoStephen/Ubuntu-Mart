/* eslint-disable react/prop-types */
import Contact from "../components/Contact";
import List from "../components/List";
import logo from "../assets/images/logo.png";
import { Bag, LoveIcon, Menu, Person, Search } from "../components/SVGs";
export default function SubNavigation({ AboutUs }) {
  return (
    <nav
      aria-label="Services Sub-navigation"
      className="flex items-center justify-between py-4 px-[5%] md:px-[10%] bg-white shadow-sm"
    >
      <div className="w-10 lg:hidden">
        <img src={logo} alt="logo" className="w-full" />
      </div>
      <ul className="hidden lg:flex items-center gap-3">
        <List name="Home" href="#" />
        <List name="Shop" href="#shop" />
        <List name="Pages" />
        <List name="Blog" href="#blog" />
        <List name="About Us" href="#" />
      </ul>
      <div className="flex items-center gap-4 md:gap-8">
        <Contact />
        <div className="lg:hidden">
          <Menu />
        </div>
        {!AboutUs && (
          <div className="hidden lg:flex items-center gap-2">
            <LoveIcon />
            <Search />
            <Bag />
            <Person />
          </div>
        )}
      </div>
    </nav>
  );
}
