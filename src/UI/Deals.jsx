import Deal from "./Deal";
import { PRODUCTS } from "../util/database";
import assets from "../assets/images/images/avatar4.png";
import ButtonShopNow from "../components/ButtonShopNow";
// Stores Dynamic products
const selectedProducts = [];
function getRandomProductsFromEachCategory() {
  Object.keys(PRODUCTS).forEach((category) => {
    const items = PRODUCTS[category];
    const randomIndex = Math.floor(Math.random() * items.length);
    selectedProducts.push(items[randomIndex]);
  });
  return selectedProducts;
}
function getHotDeals() {
  getRandomProductsFromEachCategory();
  const shuffledProducts = selectedProducts.sort(() => 0.5 - Math.random());
  return shuffledProducts.slice(2, 5);
}
function getBestSeller() {
  getRandomProductsFromEachCategory();
  const shuffledProducts = selectedProducts.sort(() => 0.5 - Math.random());
  return shuffledProducts.slice(2, 5);
}

function getTopRated() {
  getRandomProductsFromEachCategory();
  const shuffledProducts = selectedProducts.sort(() => 0.5 - Math.random());
  return shuffledProducts.slice(2, 5);
}
const HotDeals = getHotDeals();
const BestSeller = getBestSeller();
const TopRated = getTopRated();
export default function Deals() {
  return (
    <section className="flex flex-col-reverse md:grid md:grid-cols-2 lg:grid-cols-4 py-8 md:px-[10%] gap-8">
      <section className="md:px-0 px-[10%]">
        <h3 className="text-2xl font-semibold mb-4">Hot Deals</h3>
        <div className="flex flex-col gap-4">
          {HotDeals.map((product) => {
            return <Deal {...product} key={product.name} />;
          })}
        </div>
      </section>
      <section className="md:px-0 px-[10%]">
        <h3 className="text-2xl font-semibold mb-4">Best Seller</h3>
        <div className="flex flex-col gap-4">
          {BestSeller.map((product) => {
            return <Deal {...product} key={product.name} />;
          })}
        </div>
      </section>
      <section className="md:px-0 px-[10%]">
        <h3 className="text-2xl font-semibold mb-4">Top Rated</h3>
        <div className="flex flex-col gap-4">
          {TopRated.map((product) => {
            return <Deal {...product} key={product.name} />;
          })}
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${assets})` }}
        className="bg-center bg-cover md:rounded-lg p-8 text-center flex items-center flex-col text-slate-50"
      >
        <p className="uppercase">Hot Sale</p>
        <h3 className="text-2xl my-3">
          <b>Save 37%</b> on Every Order
        </h3>
        <ButtonShopNow color />
      </section>
    </section>
  );
}
