import { useState } from "react";
import { useEffect } from "react";
import { Swiggy_Restaurant_Menu_last } from "../Constant";
import { Swiggy_Restaurant_Menu } from "../Constant";

const useRestaurantMenu = (id) => {
    const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    // console.log(Swiggy_Restaurant_Menu + id + Swiggy_Restaurant_Menu_last);
    const data = await fetch(
      Swiggy_Restaurant_Menu + id + Swiggy_Restaurant_Menu_last
    );
    const json = await data.json();
    setRestaurant(json?.data);
    // .cards[0]?.card?.card?.info
    // .cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    //     .itemCards

    // setMenu(
    //   json?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    //     .itemCards
    // );
    
  }

  return (
        restaurant
  )
};

export default useRestaurantMenu;
