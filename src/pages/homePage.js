import React from "react";
import AppRating from "../components/AppRating";
import BrandsLove from "../components/BrandsLove";
import Header from "../components/common/Header";
import CredExperience from "../components/CredExperience";
import CredSecurity from "../components/CredSecurity";
import CredStory from "../components/CredStory";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import MobileScroll from "../components/MobileScroll";
import WindowPeak from "../components/Peak";
import ProductShowcase from "../components/ProductShowcase";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <WindowPeak />
      <CredSecurity />
      <CredStory />
      <AppRating />
    </>
  );
};

export default HomePage;
