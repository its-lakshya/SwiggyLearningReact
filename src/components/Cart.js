import { useSelector } from "react-redux";
import FoodItems from "./FoodItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <h1 className="font-bold text-3xl m-2">Cart Items-{cartItems.length}</h1>
      <button className="bg-blue-600 rounded-md m-2" onClick={() => handleClearCart()}>Clear Cart</button>
      <div
        className="flex flex-row flex-wrap m-2"
      >
        {cartItems.map((Items) => (
          <FoodItems key={Items.id} {...Items} />
        ))}
        {console.log({ cartItems })}
      </div>
    </>
  );
};

export default Cart;
