import HomeBestRecipeSection from "@/components/home/home-best-recipe-section";
import HomeBestSellingSection from "@/components/home/home-best-selling-section";
import HomeCarousel from "@/components/home/home-carousel";
import HomeCouponSection from "@/components/home/home-coupon-section";
import HomeDetailsSection from "@/components/home/home-details-section";
import HomeExploreSection from "@/components/home/home-explore-section";
import HomeLatestNewsSection from "@/components/home/home-latest-news-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Red Produce",
};


export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center gap-8">
      <HomeCarousel />
      <HomeExploreSection />
      <HomeCouponSection />
      <HomeDetailsSection />
      <HomeBestSellingSection />
      <HomeBestRecipeSection />
      <HomeLatestNewsSection />
    </main>
  );
}
