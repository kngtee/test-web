import React from "react";
import blogHeaderImg from "../assets/images/blog_header_img.png";
import News01 from "../assets/images/InTheNews01.png";
import News02 from "../assets/images/InTheNews02.png";
import { HiArrowRight } from "react-icons/hi2";

const Media = () => {
  return (
    <>
      {/* Blog Hero */}
      <section className="pt-[40px] 2xl:h-[800px] bg-[#FBF9F9]">
        <div className="container">
          <div className="container px-8 space-y-6">
            <h1 className="text-[32px] leading-[42px] text-primaryColor font-[700]">
              Blog
            </h1>
            <div className="w-full bg-[#F4E6E6] flex items-start justify-between rounded-xl p-6 gap-3">
              <div className="space-y-4">
                <h4 className="text-primaryColor text-lg">CSR</h4>
                <div>
                  <h1 className="text-[38px] leading-[48px] text-black font-[700] max-w-[700px]">
                    Custodian Investment empowers 125 youths
                  </h1>
                  <p className="text__para__dim max-w-[500px]">
                    Custodian Investment Plc, a prominent investment company
                    with extensive interests in various industries and brands,
                    has demonstrated its dedication to corporate social
                    responsibility.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-primaryColor">
                  <span>Read the story</span>
                  <HiArrowRight />
                </div>
              </div>
              <div>
                <figure>
                  <img src={blogHeaderImg} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News by Tags */}
      <section className="pt-[40px] 2xl:h-[800px] bg-[#FBF9F9]">
        <div className="container">
          <div className="container px-8 space-y-6">
            <h1 className="text-[32px] leading-[42px] text-primaryColor font-[700]">
              Blog
            </h1>
            <div className="w-full bg-[#F4E6E6] flex items-start justify-between rounded-xl p-6 gap-3">
              <div className="space-y-4">
                <h4 className="text-primaryColor text-lg">CSR</h4>
                <div>
                  <h1 className="text-[38px] leading-[48px] text-black font-[700] max-w-[700px]">
                    Custodian Investment empowers 125 youths
                  </h1>
                  <p className="text__para__dim max-w-[500px]">
                    Custodian Investment Plc, a prominent investment company
                    with extensive interests in various industries and brands,
                    has demonstrated its dedication to corporate social
                    responsibility.
                  </p>
                </div>
                <div>
                  <span className="text-primaryColor">Read the story</span>
                </div>
              </div>
              <div>
                <figure>
                  <img src={blogHeaderImg} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In The News */}
      <section className="pt-[40px] 2xl:h-[800px] bg-[#FBF9F9]">
        <div className="container">
          <div className="container px-8 space-y-6">
            <h1 className="text-[32px] leading-[42px] text-primaryColor font-[700]">
              In The News
            </h1>
            <div className="w-full bg-[#F5F5F5] flex items-start justify-between rounded-xl p-6 space-x-6">
              <div>
                <figure>
                  <img src={News01} alt="" />
                </figure>
              </div>

              <div className="space-y-4">
                <div>
                  <h1 className="text-[38px] leading-[48px] text-black font-[700] max-w-[700px]">
                    Custodian Investment empowers 125 youths
                  </h1>
                  <p className="text__para__dim max-w-[500px]">
                    Custodian Investment Plc, a prominent investment company
                    with extensive interests in various industries and brands,
                    has demonstrated its dedication to corporate social
                    responsibility.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-primaryColor">
                  <span>Read the story</span>
                  <HiArrowRight />
                </div>
              </div>
            </div>
            <div className="w-full bg-[#F5F5F5] flex items-start justify-between rounded-xl p-6 space-x-6">
              <div>
                <figure>
                  <img src={News02} alt="" />
                </figure>
              </div>

              <div className="space-y-4">
                <div>
                  <h1 className="text-[38px] leading-[48px] text-black font-[700] max-w-[700px]">
                    Solicitors can prepare the will and register it in Court.
                  </h1>
                  <p className="text__para__dim max-w-[500px]">
                    Custodian Investment Plc, a prominent investment company
                    with extensive interests in various industries and brands,
                    has demonstrated its dedication to corporate social
                    responsibility.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-primaryColor">
                  <span>Read the story</span>
                  <HiArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
