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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const PrivacyPolicyPage = () => {
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
              <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="py-8 lg:py-12 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl lg:text-6xl font-bold">Privacy Policy</h1>
          <p>
            [Company Name] ("we," "us," or "our") is committed to protecting the
            privacy and security of your personal information. This Privacy
            Policy outlines the types of personal information we collect, how we
            use it, and the steps we take to ensure its protection.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-2xl lg:text-3xl">
            Information We Collect:
          </h3>
          <p>
            We may collect personal information when you interact with our
            website, mobile application, or when you communicate with us via
            email, phone, or in-person. The types of personal information we may
            collect include:
          </p>
          <ul className="list-disc ml-5">
            <li>
              Contact information (such as name, email address, phone number,
              and mailing address)
            </li>
            <li>Payment information (such as credit card details)</li>
            <li>Account credentials (such as username and password)</li>
            <li>
              Preferences and interests related to our products and services
            </li>
            <li>Other information you voluntarily provide to us</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-2xl lg:text-3xl">
            How We Use Your Information:
          </h3>
          <p>
            We may use the personal information we collect for the following
            purposes:
          </p>
          <ul className="list-disc ml-5">
            <li>
              Processing and fulfilling your orders for our products and
              services
            </li>
            <li>Providing customer support and responding to your inquiries</li>
            <li>
              Sending you marketing communications and promotional offers (you
              may opt-out at any time)
            </li>
            <li>
              Personalizing your experience and improving our products and
              services
            </li>
            <li>
              Preventing fraudulent activities and ensuring the security of our
              website and systems
            </li>
            <li>Complying with legal obligations and enforcing our policies</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-2xl lg:text-3xl">Data Security:</h3>
          <p>
            We take reasonable measures to protect the security of your personal
            information and prevent unauthorized access, disclosure, alteration,
            or destruction. However, please note that no method of transmission
            over the internet or electronic storage is 100% secure.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-2xl lg:text-3xl">Your Choices:</h3>
          <p>
            You have the right to access, update, or delete your personal
            information, subject to certain limitations and legal requirements.
            You may also opt-out of receiving marketing communications from us
            by following the instructions provided in the communication or
            contacting us directly.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-2xl lg:text-3xl">
            Changes to This Privacy Policy:
          </h3>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We encourage you to
            review this Privacy Policy periodically for any updates.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
