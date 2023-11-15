import { IMG_CDN_URL } from "../Constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  totalRatingsString,
  cuisines,
  cloudinaryImageId,
}) => {
  // const {user} = useContext(UserContext);
  return(
  <div className="w-56 min-h-72 p-2 m-2 shadow-xl bg-blue-100 overflow-hidden flex flex-wrap ">
    <img className="w-96  h-36" src={IMG_CDN_URL + cloudinaryImageId} />
    <h2 className="font-bold text-xl">{name}</h2>
    <h4>{cuisines}</h4>
    <h4>{totalRatingsString}</h4>
    {/* <h5 className="font-bold">{user.name}-{user.email}</h5> */}

    {/* <h4>{user.name}</h4> */}
    {/* <h4>{user.gmail}</h4> */}
  </div>
  );
};

export default RestaurantCard;
