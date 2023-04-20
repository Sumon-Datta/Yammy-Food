import { faCartShopping, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = ({ carts }) => {
  const [cartinfo, setCartinfo] = useState(true);

  return (
    <div className="nav" >
      <div className="navbar flex justify-between px-16 py-3 bg-indigo-500 text-white  ">
        {/* logo */}
        <div className="logo">
          <a href="?">
            Yammy <span className="text-yellow-200 ">Food</span>
          </a>
        </div>
        {/* navlink */}
        <div className="navlink flex">
          <li>
            <a href="?">Home</a>
          </li>
          <li>
            <a href="?">About</a>
          </li>
          <li>
            <a href="?">Contact</a>
          </li>
          <li>
            <a href="?">Login</a>
          </li>
        </div>
        {/* dark/light mode & cart */}
        <div className="mode_cart flex  ">
          <div className="mode">
            <FontAwesomeIcon className="cursor-pointer mx-9" icon={faSun} />
          </div>
          <div className="cart">
            <FontAwesomeIcon
              className="cursor-pointer"
              onClick={() => setCartinfo(!cartinfo)}
              icon={faCartShopping}
            />
            <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
              {carts.length}
            </span>
          </div>
        </div>
      </div>

      {
        !cartinfo? <div className="carts">
        {carts.map((cart) => (
          <Cart cart={cart}></Cart>
        ))}
      </div> : ""
      }
      
    </div>
  );
};

export default Home;
