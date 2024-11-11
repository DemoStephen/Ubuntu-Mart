import BestSeller from "../UI/BestSellerProducts";
import Blogs from "../UI/Blogs";
import Deals from "../UI/Deals";
import DiscountSales from "../UI/DiscountSales";
import FeaturedProduct from "../UI/FeaturedProduct";
import Footer from "../UI/Footer";
import Header from "../UI/Header";
import Navigation from "../UI/Navigation";
import Partners from "../UI/Partners";
import SellingPoint from "../UI/SellingPoint";
import SellingPoint2 from "../UI/SellingPoint2";
import Subscribe from "../UI/Subscribe";
import Testimonial from "../UI/Testimonial";
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
      <SellingPoint2 />
      <DiscountSales />
      <BestSeller />
      <Deals />
      <Blogs />
      <Testimonial />
      <Partners />
      <Subscribe />
      <Footer />
    </>
  );
}
