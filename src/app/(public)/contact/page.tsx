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
import contactImage from "../../../../public/images/contact.png"
import GoogleMap from "@/components/google-map";
import ContactForm from "@/components/contact/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const services = [
  {
    title: "Visit Feedback",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    title: "Employer Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    title: "Billing Inquiries",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    title: "General Inquiries",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];
const ContactPage = () => {
  const defaultProps = {
    center: {
      lat: 33.533825,
      lng: -112.260796,
    },
    zoom: 14,
  };
  return (
    <main className="w-full h-full flex flex-col gap-6 xl:gap-8 relative">
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
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="py-8 lg:py-12 w-full flex flex-col gap-8">
        <div className="flex flex-col xl:flex-row gap-12">
          <div className="basis-full xl:basis-[40%] shrink-0 grow-0 flex flex-col gap-6 lg:pr-6">
            <h2 className="text-primary font-bold  text-3xl lg:text-4xl">
              How Can Help You?
            </h2>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Let us know how we can help you
            </h1>
            <p className="text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p className="text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="basis-full shrink-0 grow-0 xl:basis-[60%] grid grid-cols-1 sm:grid-cols-2 2xl:gap-12 gap-6 place-items-center">
            {services.map((item, index) => (
              <div key={index} className="flex flex-col gap-6">
                <div className="flex items-start gap-2">
                  <div className="text-xl lg:text-2xl font-black">
                    0{index + 1}.
                  </div>
                  <div className="text-2xl lg:text-3xl font-medium">
                    {item.title}
                  </div>
                </div>
                <p className="text-base lg:text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <GoogleMap
          containerClassName="w-full h-[412px] rounded-2xl overflow-hidden shadow-xl"
          {...defaultProps}
        />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full flex flex-col gap-6">
            <h3 className="text-primary text-3xl lg:text-4xl font-bold">
              Contact Form
            </h3>
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl lg:text-6xl font-bold">Drop Us A Line</h1>
              <p className="text-lg lg:text-xl">
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>
            <ContactForm />
          </div>
          <div className="hidden w-full lg:flex">
            <Image src={contactImage} alt="image" className="object-contain w-full h-full xl:max-h-[644px] 2xl:max-h-[720px]"/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
