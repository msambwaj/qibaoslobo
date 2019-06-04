import React from "react";
import MainCenter from "./mainCenter/MainCenter";
import Heading from "./header/Heading";
import AboutUs from "./aboutUs/AboutUs";

function TopPage() {
  return (
    <div>
      <Heading />
      <MainCenter />
      <AboutUs />
    </div>
  );
}

export default TopPage;
