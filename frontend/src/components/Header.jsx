import { HiOutlineMenuAlt3, HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <header className="px-6 text-(--reddish) bg-(--creamish)">
        <div className="flex items-center">
          {/* <!-- name and logo on navbar --> */}
          <div>
            <a className="flex items-center text-black py-1">
              <img
                src={"/egg_seller-removebg-logo.png"}
                alt="kuku-shop-icon"
                className="h-15 w-15"
              />
              <span className="ml-3 text-2xl font-extrabold">Kuku Shop</span>
            </a>
          </div>

          {/* <!-- navigation links --> */}

          <nav className="flex items-center justify-center mx-auto">
            <Link to={"/"} className="text-xl px-4 py-2">
              Home
            </Link>
            <Link to={"/kuku-shop/products"} className="text-xl px-4 py-2">
              Products
            </Link>
            <Link to={"/kuku-shop/contacts"} className="text-xl px-4 py-2">
              Contacts
            </Link>
          </nav>

          {/* <!-- cart button --> */}
          <Link to={"/cart"} className="relative">
            <button className="cursor-pointer">
              <HiOutlineShoppingBag size={28} />
            </button>

            {/* <!-- dot badge --> */}
            <p className="absolute right-[-4px] bottom-[4px]  w-4 text-center leading-4 bg-(--darkBrownish) text-(--creamish) rounded-full text-[8px]">
              10
            </p>
          </Link>

          {/* <!-- humburger icon --> */}
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
          >
            <HiOutlineMenuAlt3 size={30} />
          </button>
          {/* <!-- humburger icon ends --> */}
        </div>

        {/* <!-- mobile menu --> */}
        <div className="md:hidden">
          <div
            id="menu"
            className="hidden absolute flex-col items-center md:hidden py-8 mt-10 space-y-6 font-bold bg-white sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#Home" className="text-xl px-4 py-2 ">
              Home
            </a>
            <a href="#Products" className="text-xl px-4 py-2 ">
              Our Products
            </a>
            <a href="#Contact" className="text-xl px-4 py-2 ">
              Contact Us
            </a>
            <a href="#Blog" className="text-xl px-4 py-2 ">
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
