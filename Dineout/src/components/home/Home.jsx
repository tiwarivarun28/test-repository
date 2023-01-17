import React, { useContext, useState } from "react";
import { RestaurantNeatYouContext } from "../../contexts/RestaurantNeatYouContext";
import { BestOffers } from "./BestOffers";
import { HomePageImg } from "./HomePageImg";
import { RestaurantNearYou } from "./RestaurantNearYou";
import { Navbar } from "../navbar/Navbar";
import { AvailableIn } from "./AvailableIn";
import { EightFacility } from "./EightFacility";
import { FeaturedRes } from "./FeaturedRes";

import { DropDownNavbar } from "../navbar/DropDownNavbar";

import { FinestRes } from "./FinestRes";

export const Home = () => {

  const [show, setShow] = useState(false);
  window.addEventListener("scroll", function (e) {
    if (window.scrollY > 333 && show === false) setShow(true);
    else if (window.scrollY < 333 && show === false) setShow(false);
  });
  return (
    <div>
      <Navbar />
      {show && <DropDownNavbar />}
      <HomePageImg />
      <BestOffers />
      {show && <RestaurantNearYou />}
      {!show && <RestaurantNearYou />}
      {show && <FeaturedRes />}
      {!show && <FeaturedRes />}
      <EightFacility />

      {show && <FinestRes />}
      {!show && <FinestRes />}
      <AvailableIn />
    </div>
  );
};
