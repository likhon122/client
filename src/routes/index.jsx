/* eslint-disable no-unused-vars */
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// component
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";

// pages
import Home from "../pages/Home/Home";
import StartedVscPage from "../pages/get-started-vsc/StartedVscPage";
import DataOwnerPage from "../pages/get-started-data-owner/DataOwnerPage";
import DataBuyerPage from "../pages/get-started-data-buyer/DataBuyerPage";
import ValidatorsPage from "../pages/get-started-validators/ValidatorsPage";
import DeviceManufacPage from "../pages/get-started-device-manufacturers/DeviceManufacPage";
import PressPage from "../pages/press/PressPage";
import ContactUsPage from "../pages/contact-us/ContactUsPage";
import BusineesInquiresPage from "../pages/businees-inquiries/BusineesInquiresPage";

function Routess() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="2xl:max-w-[1920px] 2xl:mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="get-started-vsc" element={<StartedVscPage />} />
            <Route path="get-started-data-owner" element={<DataOwnerPage />} />
            <Route path="get-started-data-buyer" element={<DataBuyerPage />} />
            <Route path="get-started-validators" element={<ValidatorsPage />} />
            <Route
              path="get-started-device-manufacturers"
              element={<DeviceManufacPage />}
            />
            {/* <Route path="/press" element={<PressPage />} /> */}
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route
              path="/business-inquiries"
              element={<BusineesInquiresPage />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routess;
