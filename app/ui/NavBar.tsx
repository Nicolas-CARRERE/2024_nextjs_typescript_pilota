import React from "react";
import Image from "next/image";

type Props = {};

function NavBar({}: Props) {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="data:image/jpeg;base64,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"
            className="h-8 w-auto rounded-3xl"
            alt="Pilota Logo"
            width={20}
            height={20}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Pilota
          </span>
        </a>
        {/* <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button> */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/accueil"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page">
                Accueil
              </a>
            </li>
            <li>
              {/* <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                Dropdown{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button> */}
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Sign out
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
