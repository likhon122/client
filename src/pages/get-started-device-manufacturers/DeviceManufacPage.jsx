/* eslint-disable no-unused-vars */
import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Marquee from "../../components/Marquee";

function DeviceManufacPage() {
  return (
    <>
      <div className="2xl:max-w-[1920px] 2xl:mx-auto">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        {/* <Section6 /> */}
        <Marquee/>
      </div>
    </>
  );
}

export default DeviceManufacPage;
