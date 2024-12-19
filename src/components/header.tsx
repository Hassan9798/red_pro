import Image from "next/image";
import React from "react";
import NavLink from "./nav-link";
import HeaderNav from "./header-nav";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 md:py-6 flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col md:flex-row items-center gap-6 divide-y md:divide-y-0 md:divide-x divide-[#DDDDDD] w-full">
        <div className="flex items-center w-full sm:w-auto gap-4 justify-between">
          {/*for mobile */}
          <div className="sm:hidden flex items-center gap-2">
            <Link
              href={"/contact"}
              className="cursor-pointer hover:text-primary text"
            >
              <FaHeadphones className="text-3xl" />
            </Link>
            <Link
              href={"/account"}
              className="cursor-pointer hover:text-primary text"
            >
              <MdAccountCircle className="text-3xl" />
            </Link>
          </div>
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={186}
              height={70}
              className="sm:w-[186px] sm:h-[70px] w-[72px] h-8"
            />
          </Link>
          {/* for mobile */}
          <Link
              href={"/shopping-cart"}
              className="sm:hidden text-neutral-light hover:text-primary"
            >
              <FiShoppingCart className="text-3xl sm:text-5xl" />
            </Link>
        </div>
        <div className="pt-4 md:pt-0 md:pl-8 grid grid-cols-2 lg:flex lg:flex-row justify-between items-center gap-3 w-full">
          {/* item 1 */}
          {/* <div className="hidden row-span-2 col-span-2 sm:row-auto sm:col-auto sm:flex flex-col gap-2 px-4">
            <div className="text-sm font-medium">Delivery</div>
            <NavLink href="#" text="Enter your address" />
          </div> */}
          {/* item 2 */}
          <div className="row-span-2 col-span-2 sm:row-auto sm:col-auto w-full p-3 bg-[#DBDBDB]/50 flex items-center divide-x divide-[#DDDDDD] rounded-full">
            {/* search input */}
            <div className="flex gap-2 px-2 items-center w-full">
              <Image
                src={"/icons/search.png"}
                alt="search"
                width={14}
                height={15}
              />
              {/* <div className='text-sm text-neutral-light'>Search</div> */}
              <input
                placeholder="Search"
                className="bg-transparent text-sm text-neutral-light w-full focus-visible:outline-none"
              />
            </div>
            {/* dropdown */}
            {/* <div className="px-2">
              <div className="text-sm text-neutral-light">Products</div>
            </div> */}
          </div>
          {/* item 3 */}
          <div className="hidden sm:flex flex-col gap-2 px-4">
            <div className="text-sm font-medium">Account</div>
            <div className="flex gap-2 items-center">
              <NavLink href="/login" text="Login" />
              <div className="text-sm text-neutral-light">or</div>
              <NavLink href="/sign-up" text="Create Account" />
            </div>
          </div>
          {/* item 4 */}
          <div className="hidden sm:block cursor-pointer ml-auto mr-2 sm:mx-0">
            <Link
              href={"/shopping-cart"}
              className="text-neutral-light hover:text-primary"
            >
              <FiShoppingCart className="text-3xl sm:text-5xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-3 md:mt-0 flex flex-col md:flex-row items-center gap-4 justify-between">
        <HeaderNav />
        <div className="hidden sm:flex gap-3 items-center">
          <Image
            src={"/icons/headphone.png"}
            alt="headphone"
            width={66}
            height={66}
            className="self-start w-8 h-8 sm:w-16 sm:h-16"
          />
          <div className="flex flex-col">
            <div className="text-lg text-primary">1900888123</div>
            <div className="text-xs text-neutral-light">
              24/7 Support Center
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
