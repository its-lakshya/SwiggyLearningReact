import { useEffect, useState } from "react";
import restaurantList from "../Constant";
import RestaurantCard from "./RestaurantCard";
import { Swiggy_Api } from "../Constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FilterRestaurantData } from "../utils/Helper";
import useOnline from "../utils/useOnline";

// what is state
// What is React Hooks
// What is useState

const Body = ({ user }) => {
  let [searchText, setSearchText] = useState(""); // useState can only be called inside a functional component
  let [allRestaurants, setAllRestaurants] = useState([]);
  let [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  /* 
  => If we do not pass any array to use effect it will be called after every re-render and if we pass empty array useEffect will
     be called only once after initial render and if we pass any value in the array than useEffect will be called every time the passed valus is changed 
  => Never write use effect inside if condition and loops 
  => Hooks can only be used inside functional components wether it is useState or useEffect
  */

  async function getApi() {
    const data = await fetch(Swiggy_Api);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  const online = useOnline();
  if (!online) {
    return <h1>Oops!! Seems that you are Offline</h1>;
  }

  if (!allRestaurants) return null;
  if (filteredRestaurants?.length === 0 && allRestaurants?.length != 0)
    return <h1>No Restaurants Match your search!!</h1>;
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="bg-blue-300 px-8 h-14 flex justify-center content-center ">
        <input
          data-testid="search-input"
          type="text"
          className="search-bar-text h-6 my-4 border-2 mx-2 rounded-md focus:bg-orange-100, border-blue-700"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <div >
        <button 
        data-testid="search-btn"         
          className="search-btn bg-blue-900 h-6 my-4 border-2  rounded-md hover:bg-blue-300 text-white"
          onClick={() => {
            const data = FilterRestaurantData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          search
        </button>
        </div>
      </div>

      <div
        data-testid="res-list"
        className="flex flex-wrap  my-4 justify-evenly"
        key="calling RestaurantCard"
      >
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} user={user} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

{
  /* <RestaurantCard {...restaurantList[0].data} />
    <RestaurantCard {...restaurantList[1].data} />
    <RestaurantCard {...restaurantList[2].data} />
    <RestaurantCard {...restaurantList[3].data} />
    <RestaurantCard {...restaurantList[4].data} />
    <RestaurantCard {...restaurantList[5].data} /> */
}
{
  /* <RestaurantCard restaurant = {restaurantList[0].data} />
    <RestaurantCard restaurant = {restaurantList[1].data} />
    <RestaurantCard restaurant = {restaurantList[2].data} />
    <RestaurantCard restaurant = {restaurantList[3].data} />
    <RestaurantCard restaurant = {restaurantList[4].data} />
    <RestaurantCard restaurant = {restaurantList[5].data} /> */
}
