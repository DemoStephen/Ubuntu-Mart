import GroupList from "../components/GroupList";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="px-[10%] py-16 bg-black text-slate-50 text-2xl flex flex-col gap-8 ">
      <section className="flex flex-col lg:flex-row text-xl gap-8">
        <div className="lg:w-[30%] flex flex-col text-center lg:text-left justify-between">
          <div className="flex items-center content-center text-3xl gap-3 justify-center lg:justify-normal">
            <img src={logo} alt="logo" className="w-12 invert" />
            <span>
              <b>Ubuntu</b>Mart
            </span>
          </div>
          <p className="text-base text-gray-400">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <address className="text-sm py-1">
            <div className="text-xs flex items-center gap-2 justify-center lg:justify-start">
              <span className="border-b-green-400 border-b py-2">
                (234)9030-0094-270
              </span>
              <span>or</span>
              <span className="border-b-green-400 border-b py-2">
                adewalestephennifemi@gmail.com
              </span>
            </div>
          </address>
        </div>

        <GroupList
          heading="My Account"
          lists={[
            { name: "My Account", href: "#" },
            { name: "Order History", href: "#" },
            { name: "Shoping Cart", href: "#" },
            { name: "Wishlist", href: "#" },
          ]}
        />

        <GroupList
          heading="Helps"
          lists={[
            { name: "Contact", href: "#" },
            { name: "Faqs", href: "#" },
            { name: "Terms & Condition", href: "#" },
            { name: "Privacy Policy", href: "#" },
          ]}
        />

        <GroupList
          heading="Proxy"
          lists={[
            { name: "About", href: "#" },
            { name: "Shop", href: "#shop" },
            { name: "Product", href: "#" },
            { name: "Track Order", href: "#" },
          ]}
        />

        <GroupList
          heading="Categories"
          lists={[
            { name: "Fruit & Vegetables", href: "#shop" },
            { name: "Meat & Fish", href: "#shop" },
            { name: "Bread & Bakery", href: "#shop" },
            { name: "Beauty & Health", href: "#shop" },
          ]}
        />
      </section>
      <div className="text-center text-sm">
        <p>UbuntuMart © 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
}
