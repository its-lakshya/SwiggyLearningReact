import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurantMenu(id);
  const dispatch = useDispatch();
  const addFoodItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex">
      <div>
        <h1>Restaurant ID = {id}</h1>
        <img
          className="image-Restaurant-menu"
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card?.card?.info.cloudinaryImageId
          }
        />
        <h2>{restaurant?.cards[0]?.card?.card?.info.name}</h2>
        <h3>{restaurant?.cards[0]?.card?.card?.info.cuisines}</h3>
        <h4>
          {restaurant?.cards[0]?.card?.card?.info.areaName +
            ", " +
            restaurant?.cards[0]?.card?.card?.info.city}{" "}
        </h4>
        <h4>{restaurant?.cards[0]?.card?.card?.info.avgRating} stars</h4>
      </div>

      {/* {console.log(
        restaurant?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card
          .card.itemCards
      )} */}

      <div>
        <div></div>
        <h2 className="font-bold text-2xl m-2">Menu</h2>
        <ul className="m-2" data-testid="menu">
          {restaurant?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
            (item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} -{" "}
                <div >
                <button
                  className="m-2 border border-black rounded-md bg-blue-400"
                  onClick={() => addFoodItems(item?.card?.info)}
                  data-testid="addBtn"
                >
                  Add
                </button>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
