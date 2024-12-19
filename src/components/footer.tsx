import Image from "next/image";
import React from "react";
import footerLogo from "../../public/images/footer-logo.png";
import Link from "next/link";

const links = [
  { href: "/about", text: "About Us" },
  { href: "#", text: "Redeem Code" },
  { href: "/blogs", text: "Blogs" },
  { href: "#", text: "Food Safety" },
];

const helpLinks = [
  { href: "/contact", text: "Contact Us" },
  { href: "#", text: "Delivery Information" },
  { href: "/faq", text: "FAQ" },
];

const followUsLinks = [
  { href: "#", text: "Instagram", icon: "/icons/instagram.svg" },
  { href: "#", text: "Facebook", icon: "/icons/facebook.svg" },
  { href: "#", text: "Twitter", icon: "/icons/twitter.svg" },
  { href: "#", text: "Youtube", icon: "/icons/youtube.svg" },
];

const storeLinks = [
  { href: "#", imgUrl: "/images/app-store.png" },
  { href: "#", imgUrl: "/images/play-store.png" },
];

const footerLinks = [
  { href: "/privacy-policy", text: "Privacy Policy" },
  { href: "#", text: "Customer Agreement" },
  { href: "/terms-condition", text: "Term of Use" },
  { href: "/refund-policy", text: "Refund Policy" },
  { href: "/packaging-policy", text: "Packaging Policy" },
  { href: "#", text: "Security" },
];

const Footer = () => {
  return (
    <footer className="px-8 md:px-12 flex flex-col divide-y divide-[#DDDDDD] w-full bg-black text-white">
      {/* upper section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4 lg:py-6">
        {/* col 1 */}
        <div className="flex flex-col gap-6">
          <Image src={footerLogo} alt="Logo" className="max-w-[412px] w-full mx-auto sm:mx-0" />
          <div className="lg:ml-9 xl:ml-11 2xl:ml-14 flex flex-col gap-3">
            {links.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-white/75 transition-all duration-150 hover:text-white"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
        {/* col 2 */}
        <div className="flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-6">
            <div className="text-base font-bold">Help</div>
            <div className="flex flex-col gap-3">
              {helpLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-white/75 transition-all duration-150 hover:text-white"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-base font-bold">Press Inquiries</div>
            <Link
              href={"#"}
              className="text-white/75 transition-all duration-150 hover:text-white"
            >
              inquiry@redproducinc.com
            </Link>
          </div>
        </div>
        {/* col 3 */}
        <div className="flex flex-col gap-6">
          <div className="text-base font-bold">Follow Us</div>
          <div className="flex flex-col gap-3">
            {followUsLinks.map((item, index) => (
              <div className="flex items-center gap-2" key={index}>
                <Image src={item.icon} alt="icon" width={12} height={12} />
                <Link
                  href={item.href}
                  className="text-white/75 transition-all duration-150 hover:text-white"
                >
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* col 4 */}
        <div className="flex flex-col gap-6">
          <div className="text-base font-bold">Get the Apps</div>
          {storeLinks.map((item, index) => (
            <Link href={item.href} key={index}>
              <Image
                src={item.imgUrl}
                alt="store-link"
                width={120}
                height={40}
              />
            </Link>
          ))}
        </div>
      </div>
      {/* bottom section */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 sm:items-center py-4">
        <div>© 2021 - 2024 American Webs Master, All Rights Reserved.</div>
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#DDDDDD]">
          {footerLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white/75 transition-all duration-150 hover:text-white py-3 sm:py-0 sm:px-3 sm:first:pl-0"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
