import ProductDetail from "../components/ProductDetail";
import { VARIOUS_DEALS } from "../util/data";
export default function Deal({ props }) {
  console.log(VARIOUS_DEALS);
  return (
    {VARIOUS_DEALS[0].map((deals)=>{
      return(
        <div>
          <img src={deals.image} alt={deals.name} />
          <ProductDetail {...deals} />
        </div>
      )
    })}
  );
}
