import DownloadApp from "../components/LandingPage/DownloadApp";
import GetStarted from "../components/LandingPage/GetStarted";
import LearnMore from "../components/LandingPage/LearnMore";
import GetQuote from "../components/LandingPage/GetQuote";
import notice from "../assets/images/notice.png";
const Home = () => {
  return (
    <>
      <GetStarted />
      <div className="bg-[#3A0000] h-[94px] items-center justify-center py-[15px] px-[35px]">
        <div className="w-full mx-auto flex items-center justify-start gap-[29px] py-[15px] px-[35px]">
          <figure className="flex-shrink-0">
            <img src={notice} alt="" className="w-10 h-10" />
          </figure>
          <div className="text-white">
            <h4 className="text-[18px] leading-[18.45px]  font-bold">
              Minimum Insurance Capital Requirements
            </h4>
            <p className="text-[14px] leading-[14.35px] font-light">
              The National Insurance Commission (NAICOM) has substantially
              raised minimum capital requirements for insurance and reinsurance
              firms operating in the country.
              <span className="font-bold">(Read More)</span>
            </p>
          </div>
        </div>
      </div>

      <GetQuote />
      <LearnMore />
      <DownloadApp />
    </>
  );
};

export default Home;
