import React from "react";
import "./FoodMenu.css";
import image from "../../../images/mutiple_image-1677214466.jpg";

const FoodMenu = () => {
  return (
    <div>
      <div
        id="mega-menu-full-image-dropdown"
        className="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-5 md:px-6">
          <ul
            className="hidden mb-4 space-y-4 md:mb-0 md:block"
            aria-labelledby="mega-menu-full-image-button"
          >
            <li>
              <a
                href="?"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                BBQ
              </a>
            </li>
            <li>
              <a
                href="?"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Best Foods
              </a>
            </li>
            <li>
              <a
                href="?"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Breads
              </a>
            </li>
            <li>
              <a
                href="?"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Burgers
              </a>
            </li>
          </ul>
          <ul className="mb-4 space-y-4 md:mb-0">
            <li>
              <a
                href="?"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Chocolates
              </a>
            </li>
            <li>
              <a
                href="?"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Desserts
              </a>
            </li>
            <li>
              <a
                href="?"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Drinks
              </a>
            </li>
            <li>
              <a
                href="?"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Fried Chicken
              </a>
            </li>
          </ul>

          <ul className="mb-4 space-y-4 md:mb-0">
            <li>
              <a
                href="?"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Ice Cream
              </a>
            </li>
            <li>
              <a
                href="?"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Our Foods
              </a>
            </li>
            <li>
              <a
                href="?"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Pizzas
              </a>
            </li>
            <li>
              <a
                href="?"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Porks
              </a>
            </li>
          </ul>

          <ul className="mb-4 space-y-4 md:mb-0">
            <li>
              <a
                href="?"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Sandwichs
              </a>
            </li>
            <li>
              <a
                href="?"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Sausages
              </a>
            </li>
            <li>
              <a
                href="?"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Steaks
              </a>
            </li>
          </ul>

          <ul className="mb-4 space-y-4 md:mb-0">
            <li>
              <img className="rounded-xl" src={image} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
