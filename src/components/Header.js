import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";  
import store from "../utils/store";
import Logo from "../assets/img/Food Villa Logo.jpg"
import React from "react";

export const Title = // this is called named export
  (
    <Link to="/">
      <h1 id="heading1" key="h1">
        {/* Food Vila */}
        <img className="h-20" data-testid="logo" src={Logo}></img>
      </h1>
    </Link>

    // logo is react element and react element is an object at the end
  );

//   let naam = "food vila";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <div className="flex flex-wrap justify-between my-6 bg-blue-900 font-bold h-20 content-center  shadow-2xl text-white">
        {Title}
        <ul className="flex space-x-4 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            <Link to="/cart" data-testid="cart" >Cart-{cartItems.length}</Link>
          </li>
        </ul>
        <div className="">
          {/* <h1 data-testid="online-status">{isOnline? "yes" : "no"}</h1> */}
          {/* <span className="p-2 m-2">{user.name}</span> */}
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header; // this is called default export
