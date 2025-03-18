import React from "react";
import saleImage from "../assets/sale.jpeg"; // Correct relative path

const DiscountBanner = () => {
  const bannerStyle = {
    width: "100%",
    margin: "0", // No margin
    padding: "0", // No padding
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block", // Remove default inline spacing
  };

  return (
    <section style={bannerStyle}>
      <img src={saleImage} alt="Special Deal" style={imageStyle} />
    </section>
  );
};

export default DiscountBanner;

