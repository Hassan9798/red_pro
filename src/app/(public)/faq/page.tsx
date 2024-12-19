import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
};

const faqSections = [
  {
    title: "Section Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac volutpat nec semper tincidunt. Leo ultricies felis elementum rhoncus tristique nulla justo. Vitae consectetur phasellus magna tellus. Feugiat id maecenas auctor ut sit dui pretium orem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac.",
  },
  {
    title: "Section Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac volutpat nec semper tincidunt. Leo ultricies felis elementum rhoncus tristique nulla justo. Vitae consectetur phasellus magna tellus. Feugiat id maecenas auctor ut sit dui pretium orem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac.",
  },
  {
    title: "Section Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac volutpat nec semper tincidunt. Leo ultricies felis elementum rhoncus tristique nulla justo. Vitae consectetur phasellus magna tellus. Feugiat id maecenas auctor ut sit dui pretium orem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac.",
  },
  {
    title: "Section Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac volutpat nec semper tincidunt. Leo ultricies felis elementum rhoncus tristique nulla justo. Vitae consectetur phasellus magna tellus. Feugiat id maecenas auctor ut sit dui pretium orem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac.",
  },
  {
    title: "Section Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac volutpat nec semper tincidunt. Leo ultricies felis elementum rhoncus tristique nulla justo. Vitae consectetur phasellus magna tellus. Feugiat id maecenas auctor ut sit dui pretium orem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac.",
  },
  {
    title: "Section Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac volutpat nec semper tincidunt. Leo ultricies felis elementum rhoncus tristique nulla justo. Vitae consectetur phasellus magna tellus. Feugiat id maecenas auctor ut sit dui pretium orem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac.",
  },
  {
    title: "Section Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac volutpat nec semper tincidunt. Leo ultricies felis elementum rhoncus tristique nulla justo. Vitae consectetur phasellus magna tellus. Feugiat id maecenas auctor ut sit dui pretium orem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac.",
  },
  {
    title: "Section Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac volutpat nec semper tincidunt. Leo ultricies felis elementum rhoncus tristique nulla justo. Vitae consectetur phasellus magna tellus. Feugiat id maecenas auctor ut sit dui pretium orem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac.",
  },
  {
    title: "Section Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac volutpat nec semper tincidunt. Leo ultricies felis elementum rhoncus tristique nulla justo. Vitae consectetur phasellus magna tellus. Feugiat id maecenas auctor ut sit dui pretium orem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac.",
  },
  {
    title: "Section Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac volutpat nec semper tincidunt. Leo ultricies felis elementum rhoncus tristique nulla justo. Vitae consectetur phasellus magna tellus. Feugiat id maecenas auctor ut sit dui pretium orem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac.",
  },
  {
    title: "Section Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac volutpat nec semper tincidunt. Leo ultricies felis elementum rhoncus tristique nulla justo. Vitae consectetur phasellus magna tellus. Feugiat id maecenas auctor ut sit dui pretium orem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac.",
  },
  {
    title: "Section Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac volutpat nec semper tincidunt. Leo ultricies felis elementum rhoncus tristique nulla justo. Vitae consectetur phasellus magna tellus. Feugiat id maecenas auctor ut sit dui pretium orem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac.",
  },
];

const FagPage = () => {
  return (
    <main className="w-full h-full flex flex-col gap-6 xl:gap-8 relative">
      <div className="-z-[1] rounded-full xl:max-w-[485px] xl:max-h-[485px] sm:max-w-[312px] sm:max-h-[312px] max-w-[182px] max-h-[182px] w-full h-full bg-primary/60 absolute -right-24 sm:-right-36 xl:-right-44 top-0"/>
      <div className="-z-[1] rounded-full xl:max-w-[485px] xl:max-h-[485px] sm:max-w-[312px] sm:max-h-[312px] max-w-[182px] max-h-[182px] w-full h-full bg-primary/60 absolute -left-44 sm:-left-64 xl:-left-80 -bottom-24"/>
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
              <BreadcrumbPage>Faqs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="py-8 lg:py-12 w-full flex flex-col gap-8">
        <h1 className="text-4xl lg:text-6xl font-bold">
          Frequently Asked Questions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 xl:gap-x-16 2xl:gap-x-20 xl:gap-y-8">
          {faqSections.map((section, index) => (
            <div key={index}>
              <Accordion className="shadow-xl bg-white pl-6 pr-4 py-3 rounded-2xl" type="single" collapsible>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{section.title}</AccordionTrigger>
                  <AccordionContent>
                    {section.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FagPage;
