import React from "react";

const Header = () => {
  return (
    <>
      <header className="text-reddish bg-creamish top-0 z-50">
        <div className="container mx-auto my-0 flex flex-row md:flex-row md:px-5 md:py-5 sm:py-0 px-5 items-center">
          {/* <!-- name and logo on navbar --> */}
          <div className="mt-3">
            <a className="flex items-center text-gray-900 mb-2 md:mb-0">
              <img
                src="img/egg_seller-removebg-logo.png"
                alt="icon"
                className="h-16 w-16"
              />
              <span className="ml-3 md:text-lg font-extrabold sm:text-lg">
                Kuku Shop
              </span>
            </a>
          </div>

          {/* <!-- navigation links --> */}

          <nav className="hidden md:flex flex-wrap items-center text-base justify-center md:ml-auto md:mr-auto">
            <a
              href="#Home"
              className="mr-5 text-xl px-4 py-2 rounded-full hover:bg-greyish"
            >
              Home
            </a>
            <a
              href="#Products"
              className="mr-5 text-xl px-4 py-2 rounded-full hover:bg-greyish"
            >
              Our Products
            </a>
            <a
              href="#Contact"
              className="mr-5 text-xl px-4 py-2 rounded-full hover:bg-greyish"
            >
              Contact Us
            </a>
            <a
              href="#Blog"
              className="mr-5 text-xl px-4 py-2 rounded-full hover:bg-greyish"
            >
              Blog
            </a>
          </nav>

          {/* <!-- cart button --> */}
          <div className="relative ml-auto pr-2">
            <button className="inline-flex bg-red items-center border-0 py-3 px-3 focus:outline-none  rounded text-base font-semibold md:mt-0">
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
            </button>

            {/* <!-- dot badge --> */}
            <span className="absolute top-0 right-1 items-center justify-center w-3 h-3 bg-darkBrownish text-white text-xs font-bold rounded-full -mr-0 -mt-1.5"></span>
          </div>
          {/* <!-- cart button ends here --> */}

          {/* <!-- humburger icon --> */}
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
          >
            <i
              className="fa-solid fa-bars fa-lg"
              style={{ color: "black" }}
            ></i>
          </button>
          {/* <!-- humburger icon ends --> */}
        </div>

        {/* <!-- mobile menu --> */}
        <div className="md:hidden">
          <div
            id="menu"
            className="hidden absolute flex-col items-center md:hidden py-8 mt-10 space-y-6 font-bold bg-white sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#Home" className="mr-5 text-xl px-4 py-2 rounded-full ">
              Home
            </a>
            <a
              href="#Products"
              className="mr-5 text-xl px-4 py-2 rounded-full "
            >
              Our Products
            </a>
            <a href="#Contact" className="mr-5 text-xl px-4 py-2 rounded-full ">
              Contact Us
            </a>
            <a href="#Blog" className="mr-5 text-xl px-4 py-2 rounded-full ">
              Blog
            </a>
          </div>
        </div>

        {/* <!-- mobile menu ends --> */}
      </header>
      {/* <!-- header ends here --> */}
    </>
  );
};

export { Header };
