/* eslint-disable no-unused-vars */
import React from "react";
import footerLogo from "../../assets/images/logo.png";
// css
import "./footer.css";
import { NavLink } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
function Footer() {
  return (
    <>
      <footer className="border-t-[1px] border-[#FCFCFC40] sm:mb-14">
        <div className="huge-dots-right">
          <div className="grid grid-cols-12">
            <div className="hidden md:flex col-span-6 flex-col items-center">
              <div className="h-[372px] flex items-center">
                {/* <video
                  className="videoTag w-[372px] pl-8 md:pl-0"
                  autoPlay
                  muted
                >
                  <source
                    src="https://www.vyvo.com//videos/footer-logo.mp4"
                    type="video/mp4"
                  />
                </video> */}
                <div className="w-[372px] pl-8 md:pl-0">
                  <img
                    className="footer-logo"
                    src={footerLogo}
                    alt="footer logo"
                  />
                </div>
              </div>
              <span className="text-[14px] opacity-40 text-[#F6F6F6] leading-[21px] font-light text-center">
                Copyright 2023
                <br /> Vyvo Smart Chain Foundation
              </span>
            </div>
            <div className="col-span-12 md:col-span-6 lg:border-l-[1px] border-[#FCFCFC40]">
              <div className="p-8">
                <div className="grid grid-cols-12 gap-y-20">
                  <div className="col-span-6 flex flex-col items-center md:items-start gap-y-4">
                    <span className="text-[12px] text-[#979797]">EXPLORE</span>
                    <HashLink to="/get-started-vsc#what-is-vsc">
                      <button className="text-[20px] lg:text-[24px] text-[#FCFCFC] leading-[32px] font-light hover:faded-lilac">
                        About VSC
                      </button>
                    </HashLink>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://vyvo.org/foundation">
                      <button className="text-[20px] lg:text-[24px] text-[#FCFCFC] leading-[32px] font-light hover:faded-lilac">
                        Foundation
                      </button>
                    </a>
                    <HashLink to="/get-started-vsc#tokenomics">
                      <button className="text-[20px] lg:text-[24px] text-[#FCFCFC] leading-[32px] font-light hover:faded-lilac">
                        Tokenomics
                      </button>
                    </HashLink>
                    <a href="#">
                      <button className="text-[20px] lg:text-[24px] text-[#FCFCFC] leading-[32px] font-light hover:faded-lilac">
                        Documentation
                      </button>
                    </a>
                  </div>
                  <div className="col-span-6 flex flex-col items-center md:items-start gap-y-4">
                    <span className="text-[12px] text-[#979797]">
                      GET STARTED
                    </span>
                    <HashLink to="/get-started-data-owner#">
                      <button className="text-[20px] lg:text-[24px] text-[#FCFCFC] leading-[32px] font-light hover:faded-lilac">
                        Data Owners
                      </button>
                    </HashLink>
                    <HashLink to="get-started-data-buyer#">
                      <button className="text-[20px] lg:text-[24px] text-[#FCFCFC] leading-[32px] font-light hover:faded-lilac">
                        Data Services
                      </button>
                    </HashLink>
                    <NavHashLink to="get-started-device-manufacturers#">
                      <button className="text-[20px] lg:text-[24px] text-[#FCFCFC] leading-[32px] font-light hover:faded-lilac">
                        Manufacturers
                      </button>
                    </NavHashLink>
                    <NavHashLink to="get-started-validators#">
                      <button className="text-[20px] lg:text-[24px] text-[#FCFCFC] leading-[32px] font-light hover:faded-lilac">
                        Validators
                      </button>
                    </NavHashLink>
                  </div>
                  <div className="col-span-6 flex flex-col items-center md:items-start gap-y-4">
                    <span className="text-[12px] text-[#979797]">
                      RESOURCES
                    </span>
                    {/* <a
                      target="_blank"
                      href="/files/VyvoSmartChainWhitepaper.pdf"
                    >
                      <button className="text-[20px] lg:text-[24px] text-[#FCFCFC] leading-[32px] font-light hover:faded-lilac">
                        Whitepaper
                      </button>
                    </a> */}
                    <a href="https://polygonscan.com/token/0xd06aef4fd6287fb02b6f9eade8534cef9b3f7d12?fbclid=IwAR1PFjmhsFgpjOmgCB3NeG_2XGN2a5YWY07HufcHA_OVr2yYaPQNyB11kHI">
                      <button className="text-[20px] lg:text-[24px] text-[#FCFCFC] leading-[32px] font-light hover:faded-lilac">
                        Explorer
                      </button>
                    </a>
                    {/* <a href="https://vyvo.org/statistics">
                      <button className="text-[20px] lg:text-[24px] text-[#FCFCFC] leading-[32px] font-light hover:faded-lilac">
                        Resources
                      </button>
                    </a> */}
                  </div>
                  <div className="col-span-6 flex flex-col items-center md:items-start gap-y-4">
                    <span className="text-[12px] text-[#979797]">CONNECT</span>
                    <NavHashLink to="press#">
                      <button className="text-[20px] lg:text-[24px] text-[#FCFCFC] leading-[32px] font-light hover:faded-lilac">
                        Press
                      </button>
                    </NavHashLink>

                    <a href="https://t.me/nyotonwealth">
                      <button className="text-[20px] lg:text-[24px] text-[#FCFCFC] leading-[32px] font-light hover:faded-lilac">
                        Telegram
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center text-center mt-10 sm:hidden">
            <span className="text-[#F6F6F6] opacity-40 text-[14px] font-light">
              Copyright 2023
              <br /> Vyvo Smart Chain Foundation
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
