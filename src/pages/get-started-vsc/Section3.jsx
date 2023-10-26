/* eslint-disable no-unused-vars */
import React from "react";
// css
import "./section3.css";
function Section3() {
  return (
    <>
      <div id="pose" className="vsc-basics-bg-3">
        <div className="mx-4 lg:mx-12">
          <div className="grid grid-cols-12 gap-y-4 lg:gap-y-0 lg:gap-x-16 relative lg:top-[0px]">
            <div className="col-span-12 lg:col-span-11 mb-5 lg:mb-10">
              <span className="text-[#7C7C7C] text-[36px] lg:text-[2rem] lg:mr-20">
                {"//"}
              </span>
              <span className="text-[36px] leading-[36px] lg:text-[50px] lg:leading-[50px] xl:text-[60px] 2xl:text-[90px] 2xl:leading-[92px] font-light text-white">
                What is
                <br className="block lg:hidden" />
                <span className="faded-purple-to-orange border-b-[1px] border-[#FFFFFFCC]">
                  &nbsp;Proof-of-Sensing?
                </span>
              </span>
            </div>
            <div className="hidden lg:block lg:col-span-1 lg:col-start-12 vertical-text-right left-[100%]">
              <span className="text-xs leading-[18px] text-white">
                <span className="mr-6"></span>
                <span className="text-[#979797] leading-[18px] ml-2">
                  /&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/
                </span>
                <span className="ml-6"></span>
              </span>
            </div>
            <div className="hidden lg:block col-span-4">
              <span className="font-normal text-base text-[#FCFCFC] opacity-50">
                About PoSe
              </span>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <span className="text-base font-light leading-[22px] text-[#FCFCFC]">
                <span className="faded-tangerine">Proof-of-Sensing (PoSe)</span>{" "}
                is a protocol used by NYOTON Smart Chain (NYT) to validate data
                generated by IoT devices on the blockchain network.
              </span>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <span className="text-base font-light leading-[22px] text-[#FCFCFC]">
                With <span className="faded-tangerine">PoSe,</span> users who
                own NYT-compatible devices can participate in the data
                validation process by using a device with a proprietary VSC-PoSe
                Encryption Chip. This ensures that the origin of the data
                generated by the IoT device is verified and cannot be tampered
                with. The anonymous data is then securely stored on the VSC
                Network.
              </span>
            </div>
          </div>
        </div>
        <div className="block lg:hidden vsc-basics-bg-3-mobile h-[300px] sm:h-[420px] md:h-[575px]"></div>
      </div>
    </>
  );
}

export default Section3;
