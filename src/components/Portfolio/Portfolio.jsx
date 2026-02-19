import React from "react";
import CountUp from "../Homepage/CountUp";
import ClientReview from "../Homepage/ClientReview";
import Client from "../Homepage/ClientSlider"

const Portfolio = () => {
  return (
    <div>
      <Client/>
      <CountUp />

      <ClientReview />
    </div>
  );
};

export default Portfolio;
