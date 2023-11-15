import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
// import { logo } from "./components/header.js" // this is called named import
import Header from "./components/Header"; // and this is called default import
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Profile from "./components/Profile.js";
import ProfileClass from "./components/ProfileClass.js";
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: { name: "lakshya", email: "kumarlakshya101@gmail.com" },
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "lakshya",
              gmail: "kumarlakshya101.gmail.com",
            }}
          />
        ),
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // here we do not used /profile because / means from the root and profile is from about and not from root.
            element: <Profile />,
          },
          {
            path: "profileclass",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// const root = ReactDOM.createRoot(<AppLayout></AppLayout>,document.getElementById("root"))

// NOTE Role of Bundler ----------

// * Create a Server
// * HMR - Hot Module Replacement
// * File Watcher Algorithm - C++
// * Bundling
// * Minifiyng
// * Cleanign Our Code
// * Development and Production Build
// * Superfast Build Algorithm
// * Image Optimization
// * Caching while development
// * Compression
// * Compatible with older version of Browsers ( It adds Polyphils)
// * HTTPS on dev
// * Port Number
// * Constant Hashing Algorithm
// * Zero Configuration
// * Tree Shaking - Removing unwanted code

// * dynamic Bundling
// * Lazy loading
// * Code Spliting
// * Dynamic Import
// * On Demand Loading
// * Chunking

// React.createElement => Object => HTML(DOM)
// JSX => React.createElement => object => HTML(DOM)

// below is the normal react without jsx--------
// const heading1 = React.createElement(
//     "h1",
//     {
//         id:"heading1",
//         key:"h1"
//     },
//     "heading1 form parcel and hindi can also be call as the mother of all languages"
// );

// console.log(heading1)
// const heading2 = React.createElement(
//     "h2",
//     {
//         id:"heading2",
//         key:"h2"
//     },
//     "heading2 this is heading 2"
// );

// const container = React.createElement(
//     "div",{
//         id:"container"
//     },
//     [heading1,heading2]
// )

// React Element-----------
// const logo = (
//   <h1 id="heading1" key="h1">
//     Food Vila
//   </h1>
// // logo is react element and react element is an object at the end
// );

// React Component----------
// const Tag = () => (
//   <h1>tag from react component</h1>
//   // Tag is a react component we can call it it inside another component as {Tag()} or <Tag /> or <tag></tag>
// );

// React Components-------
// - Functional Components - NEW : we will learn this
// - Class based Components - OLD

// Functional Components------
// - functional component is a normal function which is returning the react element or some piece of JSA which eventualy is also a react element
// - name of the functional component statrts with capital letter

//NOTE - older code

// const logo = (
//   <h1 id="heading1" key="h1">
//     Food Vila
//   </h1>
// // logo is react element and react element is an object at the end
// );

// const Header = () => (
//   <a href="/">
//     <div className="header">
//         {logo}
//           <div className="nav-items">
//             <ul>
//               <li>Home</li>
//               <li>About</li>
//               <li>Contact</li>
//               <li>Cart</li>
//             </ul>
//           </div>
//     </div>
//   </a>
// );

// const  restaurantList = {
//   name : "KFC",
//   image : "https://pngimg.com/uploads/kfc/kfc_PNG47.png",
//   cusines : ["Americano" , "spicy"],
//   rating : 4.5
// }

// const BurgerKing = () => (
//   <div className="card">
//     <img className="image" src={restaurantList.image}/>
//     <h2>{restaurantList.name}</h2>
//     <h4>{restaurantList.cusines.join(", ")}</h4>
//     <h4>{restaurantList.rating}</h4>
//   </div>
// )
// const Body = () => (
//   <>
//     <BurgerKing />
//   </>
// )

// const Footer = () => (
//   <h4>Footer</h4>
// )
