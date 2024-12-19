import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import AboutImage from "../../../../public/images/about.png";
import AboutCarousel from "@/components/about/about-carousel";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const providersList = [
    { icon: '/icons/price-tag.png', text: 'Best Prices & Offers' },
    { icon: '/icons/handshake.png', text: 'Wide Assortment' },
    { icon: '/icons/delivery.png', text: 'Free Delivery' },
    { icon: '/icons/purchase.png', text: 'Easy Returns' },
    { icon: '/icons/angel.png', text: '100% Satisfaction' },
    { icon: '/icons/heartshake.png', text: 'Great Daily Deal' },
]

const AboutPage = () => {
  return (
    <main className="w-full h-full flex flex-col gap-6 xl:gap-8">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="flex items-center gap-3 text-primary"
              >
                <div>
                  <Image
                    src={"/icons/home.png"}
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div>Home</div>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="flex justify-center items-center">
          <Image src={AboutImage} alt="About" className="hidden xl:block xl:w-[90%] rounded-3xl" />
        </div>
        <div className="flex flex-col gap-6 2xl:gap-8 justify-center">
          <h1 className="m-0 text-4xl 2xl:text-5xl font-bold">
            Welcome to&nbsp;<span className="text-primary">Red Produce</span>
          </h1>
          <p className="text-body text-lg 2xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum
          </p>
          <p className="text-body text-lg 2xl:text-xl">
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
            et Ut placerat legendos interpre.Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
            commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
            ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate id
            est laborum.
          </p>
          <AboutCarousel />
        </div>
      </div>
      <div className="py-4 grid gird-cols-1 md:grid-cols-2 divide-[#DDDDDD] divide-y md:divide-y-0 md:divide-x">
        <div className="flex justify-center items-center w-full p-6">
        <div className="flex flex-col gap-6 text-center max-w-sm">
          <h1 className="text-4xl 2xl:text-5xl m-0 font-bold">Our Mission</h1>
          <p className="text-body text-lg 2xl:text-xl">
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </div>
        </div>
        <div className="flex justify-center items-center w-full p-6">
        <div className="flex flex-col gap-6 text-center max-w-sm">
          <h1 className="text-4xl 2xl:text-5xl m-0 font-bold">Our Vision</h1>
          <p className="text-body text-lg 2xl:text-xl">
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </div>
        </div>
        
       
      </div>
      <div className="flex flex-col justify-center items-center gap-8 text-center w-full 2xl:w-[80%] mx-auto">
        <div className="flex flex-col gap-1 justify-center items-center">
            <h1 className="m-0 text-4xl lg:text-5xl font-bold">What We Provide</h1>
            <div className="mt-1 w-10/12 h-[2px] bg-[#DDDDDD]"/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {providersList.map((item, index) => (
                <div key={index} className="rounded-2xl border border-black/10 shadow-sm transition-all duration-150 hover:shadow-xl py-6 px-6 lg:px-9 flex flex-col justify-center items-center gap-4 text-center">
                    <Image src={item.icon} alt="icon" width={100} height={100}/>
                    <h2 className="m-0 font-medium text-2xl md:text-3xl">
                        {item.text}
                    </h2>
                    <p className="text-lg 2xl:text-xl">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                    </p>
                    <Link href={'#'} className="text-primary text-xl">Read More</Link>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
