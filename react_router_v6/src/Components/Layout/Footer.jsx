import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="shadow bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <NavLink
            to="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </NavLink>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <NavLink to="#" class="hover:underline me-4 md:me-6">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="#" class="hover:underline me-4 md:me-6">
                Licensing
              </NavLink>
            </li>
            <li>
              <NavLink to="#" class="hover:underline">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <NavLink to="https://flowbite.com/" class="hover:underline">
            Flowbite™
          </NavLink>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
