/* eslint-disable no-unused-vars */
import React from "react";
import { NavHashLink } from "react-router-hash-link";

import videoImage from "../../../assets/videos/buy.mp4";

function Section2() {
  return (
    <>
      <div className="square-dots-bg mt-20">
        <div className="mx-4">
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="grid grid-cols-12">
              <div className="col-span-12 grid grid-cols-12">
                <div
                  data-aos="fade-up"
                  data-aos-duration="400"
                  className="col-span-12 pb-12">
                  <div className="flex text-[36px] text-white font-light">
                    <span className="">
                      <span className="text-[#7C7C7C] text-[2.5rem] lg:mr-20">
                        {"//"}
                      </span>
                      <span className="faded-light-blue leading-[36px] tracking-[-2%]">
                        How&nbsp;
                      </span>
                      NYT
                    </span>
                  </div>
                  <div className="flex text-[36px] text-white font-light leading-[36px] tracking-[-2%]">
                    <span className="faded-light-blue">Gathers </span>{" "}
                    &nbsp;Data
                  </div>
                </div>
                {/* <div className="col-span-12 my-12">
                  <div className="flex flex-col gap-y-4 align-bottom ">
                    <img
                      alt="circle image"
                      loading="lazy"
                      width="28"
                      height="28"
                      decoding="async"
                      data-nimg="1"
                      className="lg:ml-8"
                      srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle-alt.png&amp;w=32&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle-alt.png&amp;w=64&amp;q=75 2x"
                      src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle-alt.png&amp;w=64&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    <p
                      data-aos="fade-up"
                      data-aos-duration="450"
                      className="opacity-80  leading-[22px]">
                      <span className="text-white text-right line-clamp-1">
                        A Data NFT is bound to an IoT device
                      </span>
                      <span className="text-white">
                        to ensure ownership and privacy of the health data
                        gathered, securely encrypting the data and rewarding the
                        owner.
                      </span>
                    </p>
                  </div>
                </div> */}
                {/* button  */}
                {/* <div
                  data-aos="fade-up"
                  data-aos-duration="600"
                  className="col-span-12">
                  <NavHashLink to="/get-started-data-owner">
                    <button className="border-faded-green px-10 py-4 w-full flex justify-center items-center hover:border-faded-green-hover">
                      <span className="text-white">Learn More</span>
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
                          objectFit: "contain",
                          objectPosition: "left center",
                        }}
                      />
                    </button>
                  </NavHashLink>
                </div> */}
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-delay="300"
                className="col-span-12 lg:block">
                <video
                  className="videoTag w-full lg:w-[737px] xl:w-[720px]"
                  autoPlay
                  muted
                  loop
                  // src="https://www.vyvo.com/videos/atom-loop.mp4"
                >
                  <source src={videoImage} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
