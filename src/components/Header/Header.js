import { faCartShopping, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import "./Header.css";
import FoodMenu from "./FoodMenu/FoodMenu";
import { data } from "../BBQ/Bbq";
import { CartContext } from "../../Context/CartContext";


const Header = () => {
  const [megamenuShow, setMegamenuShow] = useState(true);

  const {cart, setCart} = useContext(CartContext)
 

  

  return (
    <div className="nav">
     
      <div className="navbar flex justify-between px-16 py-4 bg-indigo-500 text-white ">
        {/*---------- Logo --------------------*/}
        <div className="logo">
          <a href="?">
            Yammy <span className="text-yellow-200 ">Food</span>
          </a>
        </div>
        {/*------------- Navlink ---------------*/}
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
            <button onClick={() => setMegamenuShow(!megamenuShow)}>
              Foods
            </button>
            {megamenuShow ? (
              ""
            ) : (
              <div className="foodmenu">
                <FoodMenu></FoodMenu>
              </div>
            )}
          </li>
          <li>
            <a href="?">Login</a>
          </li>
        </div>
        {/*--------------   Dark / Light mode & cart  -----------------*/}
        <div className="mode_cart flex  ">
          {/*----------------- mode----------------------  */}
          <div className="mode">
            <FontAwesomeIcon className="cursor-pointer mx-9" icon={faSun} />
          </div>
          {/*----------------- Mode----------------------  */}

          {/*----------------- CartIcon ----------------------  */}

          <div className="cart">
            <button
              type="button"
              class="relative inline-flex items-center px-3  text-sm font-medium text-center text-white  rounded-lg  focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </svg>
              <span class="sr-only">Notifications</span>
              <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-1 dark:border-gray-900">
                {cart.length}
              </div>
            </button>
          </div>
          {/*----------------- CartIcon ----------------------  */}
        </div>
      </div>
    </div>
  );
};

export default Header;
