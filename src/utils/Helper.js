export const FilterRestaurantData = (searchText, restaurants) => {
    return restaurants.filter((restaurant) => {
      return restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
    });
  };