import React from "react";
import { Metadata } from "next";
import { BiSolidLike } from "react-icons/bi";
import { MdOutlineInsertComment } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { LuChevronsRight } from "react-icons/lu";
import InputField from "@/components/input/input-field";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = {
  title: "",
};

interface SingleBlogPage {
  params: {
    id: string;
  };
}

const SingleBlogPage: React.FC<SingleBlogPage> = ({ params }) => {
  return (
    <main className="w-full h-full flex flex-col gap-6 xl:gap-8 relative py-8">
      <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8 lg:divide-x lg:divide-[#959595]">
        {/* blog */}
        <div className="flex-1 flex flex-col gap-6 order-2 lg:order-1">
          <div className="flex flex-col gap-2">
            <img
              src={"/images/blog-image.png"}
              alt="blog-img"
              className="w-full rounded-xl h-80 object-fill object-center"
            />
            <div className="lg:pl-6 flex items-center gap-6 flex-wrap text-body text-sm">
              <div className="flex items-center gap-2">
                <div>Like</div>
                <div>
                  <BiSolidLike />
                </div>
                <div>(102)</div>
              </div>
              <div className="flex items-center gap-2">
                <div>Comments</div>
                <div>
                  <MdOutlineInsertComment />
                </div>
                <div>(10)</div>
              </div>
              <div className="flex items-center gap-2">
                <div>Date</div>
                <div>
                  <FaRegCalendarAlt />
                </div>
                <div>05 / 08 / 2023</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl lg:text-4xl">
              What color of bell pepper do you prefer?
            </h1>
            <div className="flex flex-col gap-6 text-base">
              <p>
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
        {/* search */}
        <div className="lg:basis-3/12 flex flex-row justify-between lg:justify-start flex-wrap items-start lg:flex-nowrap lg:flex-col gap-6 lg:gap-8 order-1 lg:order-2 lg:pl-6">
            {/* search bar */}
            <div className="mx-auto max-w-96 w-full px-6 py-4 bg-[#EDEDED] rounded-xl">
                <div className="flex rounded-xl border border-primary items-stretch divide-x divide-primary">
                    <input className="px-4 py-3 outline-none bg-transparent w-full" placeholder="Search..."/>
                    <div className="flex justify-center items-center cursor-pointer px-4">
                        <IoSearchSharp className="text-body w-5 h-5"/>
                    </div>
                </div>
            </div>
            {/* categories */}
            {/* <div className="w-full sm:w-auto flex flex-col gap-5 lg:mt-4">
                <h3 className="font-medium text-xl">Categories</h3>
                <div className="w-full sm:w-auto grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-col gap-3 text-sm font-medium text-[#333333]">
                    <div className="flex items-center gap-3">
                        <LuChevronsRight />
                        <div>Apple</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <LuChevronsRight />
                        <div>Bananas</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <LuChevronsRight />
                        <div>Apricot</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <LuChevronsRight />
                        <div>Apricot</div>
                    </div>
                </div>
            </div> */}
            {/* Archives */}
            {/* <div className="hidden lg:flex flex-col gap-5 lg:mt-10">
                <h3 className="font-medium text-xl">Archives</h3>
                <div className="flex flex-col gap-3 text-sm font-medium text-[#333333]">
                    <div className="flex items-center gap-3">
                        <LuChevronsRight />
                        <div>Oct 2020</div>
                    </div>
                </div>
            </div> */}
            <div className="hidden lg:flex flex-col gap-4 lg:mt-6 w-full">
                <div className="text-base font-medium text-[#333333]">
                    Subscribe Now to Get Daily Updates
                </div>
                <div className="flex flex-col gap-3">
                    <InputField placeholder="Email Address"/>
                    <Button variant={'primary'} size={'lg'} className="lg:w-full rounded-xl">
                        Submit
                    </Button>
                </div>
            </div>
        </div>
      </div>
      <div className="mx-auto flex lg:hidden flex-col gap-4 mt-6">
                <div className="text-base font-medium text-[#333333]">
                    Subscribe Now to Get Daily Updates
                </div>
                <div className="flex flex-col gap-3">
                    <InputField placeholder="Email Address"/>
                    <Button variant={'primary'} size={'lg'} className="lg:w-full rounded-xl">
                        Submit
                    </Button>
                </div>
            </div>
    </main>
  );
};

export default SingleBlogPage;
