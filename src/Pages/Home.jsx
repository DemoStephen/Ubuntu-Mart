import FeaturedProduct from "../UI/FeaturedProduct";
import Header from "../UI/Header";
import Navigation from "../UI/Navigation";
import SellingPoint from "../UI/SellingPoint";
import TopCategories from "../UI/TopCategories";
import Trust from "../UI/Trust";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <SellingPoint />
      <FeaturedProduct />
      <TopCategories />
      <Trust />
    </>
  );
}
