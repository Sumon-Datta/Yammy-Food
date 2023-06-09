import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import "./BBQCard.css";
import { CartContext } from "../../../Context/CartContext";
import { toast } from "react-toastify";
import { LightContext } from "../../../Context/LightContext";

const BBQCard = ({ bbq }) => {
  const { img, name, price, rate } = bbq;

  const { cart, setCart } = useContext(CartContext);
  const { light, setLight } = useContext(LightContext);

  const handleAddToCart = (bbq) => {
    const exits = cart.find((cartt) => cartt.id === bbq.id);
    if (!exits) {
      const newCart = [...cart, bbq];
      setCart(newCart);

      toast.success("Your Product Add to Cart", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success("Your Product already added", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <div class= {light?
        "max-w-sm bg-blue-950 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-white"
        :
        "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"  
      } >
        <a href="?">
          <img class="rounded-t-lg" src={img} alt="" />
        </a>
        <div class="p-5">
          <a href="?">
            <h5 class={
              light? "mb-2 text-2xl font-bold tracking-tight text-white dark:text-white" : 
              "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            }>
              {name}
            </h5>
          </a>

          <p class={
            light?"mb-3 font-normal text-white dark:text-gray-400"
            :
            "mb-3 font-normal text-gray-700 dark:text-gray-400"
          }>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>

          <a href="?">
            <h5 class={
              light? "mb-2 text-xl font-bold tracking-tight text-white dark:text-white"
              :
              "mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            }>
              Price: <span className="text-black font-sans">$</span> {price}
            </h5>
          </a>
          <button
            onClick={() => handleAddToCart(bbq)}
            type="button"
            class="flex text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br  focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Cart Now
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default BBQCard;
