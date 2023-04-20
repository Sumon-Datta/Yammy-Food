import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Bbq = ({ bbq, hancleAddToCart }) => {
  const { img, name, price, rate } = bbq;

  return (
    <div>
      {/* card */}

      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg w-full h-full"
            src={img}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <h3> Ratings: {rate} <FontAwesomeIcon className="text-yellow-500"  icon={faStar} />/ 5 </h3>
          <h3>Price: {price} </h3>
          <button
            href="?" onClick={()=>hancleAddToCart(bbq)}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add To Cart
            <FontAwesomeIcon  className="w-4 h-4 ml-2 -mr-1" icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bbq;
