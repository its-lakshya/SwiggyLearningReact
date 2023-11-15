import { IMG_CDN_URL } from "../Constant";

const FoodItems = ({
    id,
    name,
    price,
    imageId,
    category,
    ratings,
}) => {

  return(
  <div className="w-56 min-h-72 p-2 m-2 shadow-xl bg-blue-100 overflow-hidden flex flex-wrap flex-col">
    <img className="w-96  h-36" src={IMG_CDN_URL + imageId} />
    <h2 className="font-bold text-xl">{name}</h2>
    <h4>{price} Rupees</h4>  
    <h4>{category}</h4>  
    <h4>{ratings.aggregatedRating.rating}</h4>  
  </div>
  );
};

export default FoodItems;
