import React from "react";
import googleAppStore from "../../assets/images/android-banner.png";
import iosStore from "../../assets/images/ios-banner.png";
const DownloadApp = () => {
  return (
    <section className="pt-[110px] bg-[#061D30] relative mt-40">
      <div className="container absolute w-[1240px] -top-[9rem] -left-0 -right-0">
        <div className="bg-gradient-to-b from-[#D25050] from-5% to-[#900000] to-95%  h-[480px] rounded-[24px]">
          <div className="container pl-[50px] pt-[91px]">
            <div className="max-w-[604px]">
              <h2 className="text-[#F5F5F5] text-[54px] leading-[65px] font-bold">
                Take control of your future – download the app now!
              </h2>
              <div className="flex gap-[28px] mt-[64px]">
                <img
                  src={googleAppStore}
                  alt=""
                  className="w-[9rem] h-[3rem]"
                />
                <img src={iosStore} alt="" className="w-[9rem] h-[3rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[290px]"></div>
    </section>
  );
};

export default DownloadApp;
