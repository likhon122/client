/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import heartSvg from "../../../assets/images/heart.svg";

import "./section4.css";
import SvgHover from "../../../components/SvgHover";
import { init } from "aos";
const Section4 = () => {
  const [initial, setInitial] = useState(true);
  const [onePera, setOnePera] = useState(false);
  const [twoPera, setTwoPera] = useState(false);
  const [threePera, setThreePera] = useState(false);

  return (
    <>
      <div className="mx-12 -mt-4">
        <div className="grid grid-cols-12">
          {/* left paragraph  */}
          <div className="col-span-9 xl:col-span-10 mb-20">
            <div
              className="relative z-10"
              style={{ opacity: 1, transform: "none" }}>
              <span className="text-white text-[90px] leading-[92px] font-light">
                data integrity
                <span className="faded-purple-vertical">
                  &nbsp;through
                </span>{" "}
                decentralization.
              </span>
            </div>
          </div>
          {/* section 4 button  */}
          <div
            className="col-span-3 xl:col-span-2"
            style={{ opacity: 1, transform: "none" }}>
            <div className="flex items-center justify-center">
              <a
                target="_blank"
                rel="noreferrer"
                className="mt-[20%]"
                href="https://m.inpersona.com/auth/login">
                <button className="border-faded-pink px-10 py-4 flex justify-center items-center  hover:border-faded-pink-pressed">
                  <span className="text-white">Start Now</span>
                  <img
                    alt="Arrow right"
                    loading="lazy"
                    width="4"
                    height="8"
                    decoding="async"
                    data-nimg="1"
                    className="ml-4"
                    src="https://www.vyvo.com/shapes/arrow-right.svg"
                    style={{
                      color: "transparent",
                      objectfit: "contain",
                      objectPosition: "left center",
                    }}
                  />
                </button>
              </a>
            </div>
          </div>
          {/* vartical text align */}
          <div
            className="col-span-1 col-start-1"
            style={{ opacity: 1, transform: "none" }}>
            <div className="vertical-text-right mt-[50%]">
              <span className="text-xs leading-[18px] text-white">
                <span className="mr-6">[</span> NYT&nbsp; NETWORK
                <span className="text-[#979797] leading-[18px] ml-2">
                  /&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/
                </span>
                <span className="ml-6">]</span>
              </span>
            </div>
          </div>

          {/* left image and paragraph  */}
          <div className="col-span-2" style={{ opacity: 1, transform: "none" }}>
            <div className="">
              <div
                className="mb-12"
                style={{
                  transform: "scale(1.2) translateZ(0px)",
                  transformOrigin: "100px 100px 0px",
                }}>
                <div style={{ opacity: 1, transform: "none" }}>
                  {initial && (
                    <img
                      alt="blue-circle"
                      loading="lazy"
                      width="320"
                      height="202"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      srcSet="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fpurple-circles-blurred.png&amp;w=384&amp;q=100 1x, https://www.vyvo.com//_next/image?url=%2Fbackgrounds%2Fpurple-circles-blurred.png&amp;w=640&amp;q=100 2x"
                      src="https://www.vyvo.com//_next/image?url=%2Fbackgrounds%2Fpurple-circles-blurred.png&amp;w=640&amp;q=100"
                      style={{ color: "transparent" }}
                    />
                  )}
                  {/* 1 */}
                  {onePera && (
                    <img
                      alt="blue-circle"
                      loading="lazy"
                      width="320"
                      height="202"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      srcSet="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fpurple-circles-blurred.png&amp;w=384&amp;q=100 1x, https://www.vyvo.com//_next/image?url=%2Fbackgrounds%2Fpurple-circles-blurred.png&amp;w=640&amp;q=100 2x"
                      src="https://www.vyvo.com//_next/image?url=%2Fbackgrounds%2Fpurple-circles-blurred.png&amp;w=640&amp;q=100"
                      style={{ color: "transparent" }}
                    />
                  )}
                  {/* 2 */}
                  {twoPera && (
                    <img
                      alt="ice"
                      loading="lazy"
                      width="320"
                      height="202"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      srcset="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fice.png&amp;w=384&amp;q=100 1x, https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fice.png&amp;w=640&amp;q=100 2x"
                      src="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fice.png&amp;w=640&amp;q=100"
                      style={{ color: "transparent" }}
                    />
                  )}
                  {threePera && (
                    <img
                      alt="single-cube"
                      loading="lazy"
                      width="320"
                      height="202"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      srcset="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fsingle-cube.png&amp;w=384&amp;q=100 1x, https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fsingle-cube.png&amp;w=640&amp;q=100 2x"
                      src="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fsingle-cube.png&amp;w=640&amp;q=100"
                      style={{ color: "transparent" }}></img>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-y-4 text-white font-light text-base leading-[22px]">
                <div style={{ opacity: 1, transform: "none" }}>
                  <span className="text-white indent-6">
                    {initial &&
                      " Bridging the digital divide between wearable device users and Web3 through secure blockchain infrastructure. NVT enables transparent data transactions between users and institutions"}
                    {/* 1 */}
                    {onePera &&
                      " Bridging the digital divide between wearable device users and Web3 through secure blockchain infrastructure. NVT enables transparent data transactions between users and institutions"}

                    {/* 2 */}
                    {twoPera &&
                      "Merging Proof-of-Stake (PoS) with our own IoT data validation protocol, Proof-of-Sensing (PoSe), we seamlessly bring blockchain technology to real-world applications."}

                    {/* 3 */}
                    {threePera &&
                      "Uniting researchers, institutions, and organizations with Data. The Decentralised Digital Health (DDH) Platform allows leveraging of authenticated IoT data from all over the world to drive scientific advancements."}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-9 col-start-6">
            <div style={{ opacity: 1, transform: "none" }}>
              <div
                className="font-light home-hover-list"
                onMouseOver={() => {
                  setOnePera(true);
                  setTwoPera(false);
                  setThreePera(false);
                  setInitial(false)
                }}>
                <div className="flex items-center">
                  <p
                    id="number"
                    className="text-xl text-[#E6E6E6] opacity-20 leading-6 hover:opacity-100">
                    01.
                  </p>
                  <p
                    id="descr"
                    className="ml-[94px] text-4xl text-[#E6E6E6] opacity-20 leading-[44px] tracking-tight font-light cursor-default">
                    IoT&nbsp;&nbsp;Devices
                  </p>
                </div>
                {/* svg  */}

                <div className="relative top-[-30px]">
                  <div style={{ height: "160px" }}>
                    {/* <heartSvg /> */}
                    <SvgHover />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <div
                className="font-light home-hover-list"
                onMouseOver={() => {
                  setOnePera(false);
                  setTwoPera(true);
                  setThreePera(false);
                  setInitial(false)
                }}>
                <div className="flex items-center">
                  <p
                    id="number"
                    className="text-xl text-[#E6E6E6] opacity-20 leading-6">
                    02.
                  </p>
                  <p
                    id="descr"
                    className="ml-[94px] text-4xl text-[#E6E6E6] opacity-20 leading-[44px] tracking-tight font-light cursor-default">
                    Hybrid Consensus PoS + PoSe
                  </p>
                </div>
                {/* svg  */}

                <div className="relative top-[-30px]">
                  <div style={{ height: "160px" }}>
                    <SvgHover />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <div
                className="font-light home-hover-list"
                onMouseOver={() => {
                  setOnePera(false);
                  setTwoPera(false);
                  setThreePera(true);
                  setInitial(false)
                }}>
                <div className="flex items-center">
                  <p
                    id="number"
                    className="text-xl text-[#E6E6E6] opacity-20 leading-6">
                    03.
                  </p>
                  <p
                    id="descr"
                    className="ml-[94px] text-4xl text-[#E6E6E6] opacity-20 leading-[44px] tracking-tight font-light cursor-default">
                    DDH Platform
                  </p>
                </div>
                {/* svg  */}
                <div className="relative top-[-30px]">
                  <div style={{ height: "160px" }}>
                    <SvgHover />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
