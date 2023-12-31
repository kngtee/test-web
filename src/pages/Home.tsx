import React from "react";
import DownloadApp from "../components/LandingPage/DownloadApp";
import GetStarted from "../components/LandingPage/GetStarted";
import LearnMore from "../components/LandingPage/LearnMore";
import GetQuote from "../components/LandingPage/GetQuote";
import notice from "../assets/images/notice.png"
const Home = () => {
  return (
    <>
      <GetStarted />
      
      <div className="w-full flex bg-[#3A0000] p-4 items-center justify-start gap-4">
        <figure>
          <img src={notice} alt="" className="w-10 h-10" />
        </figure>
        <div className="text-white">
          <h4>Minimum Insurance Capital Requirements</h4>
          <p className="text-xs font-light">The National Insurance Commission(NAICOM) has substantially raised minimum capital requirements for insurance and reinsurance firms operating in the country. <span className="font-bold">(Read More)</span></p>
        </div>
      </div>
      <GetQuote />
      <LearnMore />
      <DownloadApp />
    </>
  );
};

export default Home;
