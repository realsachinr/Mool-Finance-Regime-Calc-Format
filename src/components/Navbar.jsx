import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function  Navbar() {
  const [dropdownStates, setDropdownStates] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
  });

  const handleMouseEnter = (dropdown) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdown]: true,
    }));
  };

  const handleMouseLeave = (dropdown) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdown]: false,
    }));
  };

  return (
    <div className="w-full  h-26 border  items-center flex justify-center">
      <div className="w-[82rem] h-24 flex justify-between items-center">
        <div>
          <svg
            width="119"
            height="26"
            viewBox="0 0 119 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.1874 25.5185V14.5062C50.6397 12.9642 51.3859 11.7215 52.4261 10.7779C53.4663 9.83432 54.6535 9.36253 55.9877 9.36253C57.2993 9.36253 58.2717 9.84582 58.9048 10.8124C59.538 11.779 59.8546 13.3325 59.8546 15.4728V25.5185H62.1612V14.5407C62.3647 13.7813 62.6587 13.0851 63.0431 12.4522C63.4275 11.8193 63.8741 11.2727 64.3829 10.8124C64.8917 10.3521 65.4457 9.99542 66.045 9.74226C66.6443 9.4891 67.2831 9.36253 67.9615 9.36253C69.2504 9.36253 70.2228 9.85733 70.8786 10.8469C71.5344 11.8366 71.8623 13.3785 71.8623 15.4728V25.5185H74.1688V14.9895C74.1688 13.8158 74.0727 12.7514 73.8805 11.7963C73.6883 10.8412 73.383 10.0242 72.9647 9.34526C72.5463 8.66635 71.9923 8.14277 71.3026 7.77455C70.6129 7.40632 69.7705 7.2222 68.7756 7.2222C65.8811 7.2222 63.6084 8.76416 61.9576 11.8481C61.7541 10.4672 61.2057 9.35102 60.3125 8.49949C59.4193 7.64797 58.2264 7.2222 56.734 7.2222C55.3093 7.2222 54.0091 7.60769 52.8332 8.37867C51.6573 9.14964 50.7075 10.2256 49.9839 11.6064V7.5329H47.8809V25.5185H50.1874ZM84.1271 26C85.421 26 86.6071 25.7476 87.6853 25.2428C88.7635 24.738 89.6942 24.0512 90.4774 23.1824C91.2605 22.3137 91.8677 21.3041 92.299 20.1535C92.7303 19.003 92.9459 17.7938 92.9459 16.5259C92.9459 15.2346 92.7246 14.0136 92.282 12.8631C91.8393 11.7126 91.2265 10.703 90.4433 9.83424C89.6602 8.96549 88.7295 8.27284 87.6513 7.75629C86.573 7.23974 85.3983 6.98146 84.1271 6.98146C82.856 6.98146 81.6869 7.23974 80.6201 7.75629C79.5532 8.27284 78.6282 8.96549 77.845 9.83424C77.0619 10.703 76.449 11.7126 76.0064 12.8631C75.5637 14.0136 75.3424 15.2346 75.3424 16.5259C75.3424 17.7938 75.558 19.003 75.9893 20.1535C76.4206 21.3041 77.0278 22.3137 77.811 23.1824C78.5941 24.0512 79.5191 24.738 80.586 25.2428C81.6529 25.7476 82.8333 26 84.1271 26ZM83.8924 23.8333C83.0068 23.8333 82.1723 23.6468 81.3889 23.2739C80.6055 22.9009 79.9243 22.3823 79.3452 21.718C78.7662 21.0536 78.3064 20.2844 77.9657 19.4103C77.6251 18.5362 77.4548 17.5863 77.4548 16.5607C77.4548 15.535 77.6251 14.5735 77.9657 13.6761C78.3064 12.7786 78.7719 11.9919 79.3623 11.3159C79.9527 10.64 80.6339 10.1097 81.4059 9.72505C82.178 9.34044 83.0068 9.14813 83.8924 9.14813C84.778 9.14813 85.6125 9.34044 86.3959 9.72505C87.1794 10.1097 87.8663 10.6341 88.4567 11.2985C89.0471 11.9628 89.5126 12.7437 89.8532 13.6411C90.1938 14.5385 90.3641 15.4884 90.3641 16.4907C90.3641 17.5164 90.1938 18.4721 89.8532 19.3578C89.5126 20.2436 89.0471 21.0187 88.4567 21.683C87.8663 22.3473 87.1794 22.8718 86.3959 23.2564C85.6125 23.641 84.778 23.8333 83.8924 23.8333ZM101.965 26C103.259 26 104.445 25.7476 105.524 25.2428C106.602 24.738 107.532 24.0512 108.316 23.1824C109.099 22.3137 109.706 21.3041 110.137 20.1535C110.569 19.003 110.784 17.7938 110.784 16.5259C110.784 15.2346 110.563 14.0136 110.12 12.8631C109.678 11.7126 109.065 10.703 108.282 9.83424C107.498 8.96549 106.568 8.27284 105.49 7.75629C104.411 7.23974 103.237 6.98146 101.965 6.98146C100.694 6.98146 99.5252 7.23974 98.4583 7.75629C97.3914 8.27284 96.4664 8.96549 95.6833 9.83424C94.9002 10.703 94.2873 11.7126 93.8446 12.8631C93.402 14.0136 93.1807 15.2346 93.1807 16.5259C93.1807 17.7938 93.3963 19.003 93.8276 20.1535C94.2589 21.3041 94.8661 22.3137 95.6492 23.1824C96.4324 24.0512 97.3574 24.738 98.4243 25.2428C99.4912 25.7476 100.672 26 101.965 26ZM101.965 23.8333C101.08 23.8333 100.245 23.6468 99.4619 23.2739C98.6785 22.9009 97.9973 22.3823 97.4182 21.718C96.8392 21.0536 96.3793 20.2844 96.0387 19.4103C95.6981 18.5362 95.5278 17.5863 95.5278 16.5607C95.5278 15.535 95.6981 14.5735 96.0387 13.6761C96.3793 12.7786 96.8448 11.9919 97.4352 11.3159C98.0256 10.64 98.7069 10.1097 99.4789 9.72505C100.251 9.34044 101.08 9.14813 101.965 9.14813C102.851 9.14813 103.686 9.34044 104.469 9.72505C105.252 10.1097 105.939 10.6341 106.53 11.2985C107.12 11.9628 107.586 12.7437 107.926 13.6411C108.267 14.5385 108.437 15.4884 108.437 16.4907C108.437 17.5164 108.267 18.4721 107.926 19.3578C107.586 20.2436 107.12 21.0187 106.53 21.683C105.939 22.3473 105.252 22.8718 104.469 23.2564C103.686 23.641 102.851 23.8333 101.965 23.8333ZM115.831 25.7592C116.281 25.7592 116.814 25.7015 117.432 25.5859C118.05 25.4703 118.572 25.3201 118.999 25.1351L118.595 23.2282C118.303 23.3438 117.988 23.4362 117.651 23.5056C117.314 23.5749 117.022 23.6096 116.775 23.6096C116.123 23.6096 115.618 23.4189 115.258 23.0375C114.899 22.6561 114.719 22.1302 114.719 21.4599V0.240723H112.427V22.2574C112.427 23.3669 112.731 24.2279 113.337 24.8404C113.944 25.453 114.775 25.7592 115.831 25.7592Z"
              fill="#0D3B66"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.2663 0L11.2554 22.0063L8.87276 26H0L11.2663 0Z"
              fill="#405CD2"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.0025 9.87036V23.6458L19.9512 26V14.0518L23.0025 9.87036Z"
              fill="#405CD2"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.2656 0L19.95 7.17444V26H11.2656V0Z"
              fill="#40D2AC"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.002 9.87036L31.6864 16.9147V26H23.002V9.87036Z"
              fill="#40D2AC"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M34.7383 18.7778L43.4227 26.0001L41.5411 25.9685H34.7383V18.7778Z"
              fill="#40D2AC"
            ></path>
          </svg>
        </div>
        
        <div className="flex gap-4   text-[20px]">
          {/* Dropdown 1 */}
          <div
            className="relative "
            onMouseEnter={() => handleMouseEnter("dropdown1")}
            onMouseLeave={() => handleMouseLeave("dropdown1")}
          >
            <button className="text-gray-600 flex gap-2 items-center hover:text-gray-900 focus:outline-none">
              Products <IoMdArrowDropdown className="text-[20px]" />
            </button>
            {dropdownStates.dropdown1 && (
              <div className="absolute right-0 mt-0 w-48 bg-white rounded-lg shadow-lg py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                  Option 1-1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                  Option 1-2
                </a>
              </div>
            )}
          </div>

          {/* Dropdown 2 */}
          <div
            className="relative ml-4"
            onMouseEnter={() => handleMouseEnter("dropdown2")}
            onMouseLeave={() => handleMouseLeave("dropdown2")}
          >
            <button className="text-gray-600 flex items-center gap-2 hover:text-gray-900 focus:outline-none">
              Tools <IoMdArrowDropdown className="text-[20px]" />
            </button>
            {dropdownStates.dropdown2 && (
              <div className="absolute right-0 mt-0 w-48 bg-white rounded-lg shadow-lg py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                  Option 2-1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                  Option 2-2
                </a>
              </div>
            )}
          </div>

          {/* Dropdown 3 */}
          <div
            className="relative ml-4"
            onMouseEnter={() => handleMouseEnter("dropdown3")}
            onMouseLeave={() => handleMouseLeave("dropdown3")}
          >
            <button className="text-gray-600 flex items-center gap-2 hover:text-gray-900 focus:outline-none">
              Resources <IoMdArrowDropdown className="text-[20px]"/>
            </button>
            {dropdownStates.dropdown3 && (
              <div className="absolute right-0 mt-0 w-48 bg-white rounded-lg shadow-lg py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                  Option 3-1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                  Option 3-2
                </a>
              </div>
            )}
          </div>

          {/* Dropdown 4 */}
          <div
            className="relative ml-4"
            onMouseEnter={() => handleMouseEnter("dropdown4")}
            onMouseLeave={() => handleMouseLeave("dropdown4")}
          >
            <button className="text-gray-600  flex items-center gap-2 hover:text-gray-900 focus:outline-none">
              Company <IoMdArrowDropdown className="text-[20px] " />
            </button>
            {dropdownStates.dropdown4 && (
              <div className="absolute right-0 mt-0 w-48 bg-white rounded-lg shadow-lg py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                  Option 4-1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                  Option 4-2
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="text-[20px]">
          {/* Button */}
          <button className="py-2.5 px-4 rounded-lg flex items-center gap-2 justify-center bg-[#405CD2] text-white transition transform hover:-translate-y-0.5 hover:shadow-lg">
            Get Started <IoMdArrowDropdown className="text-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
