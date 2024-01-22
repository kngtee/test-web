
import blogHeaderImg from "../assets/images/blog_header_img.png";
import News01 from "../assets/images/InTheNews01.png";
import News02 from "../assets/images/InTheNews02.png";
import blogPost01 from "../assets/images/blog_post01.png";
import { HiArrowRight } from "react-icons/hi2";

const Media = () => {
  return (
    <>
      {/* Blog Hero */}
      <section className="pt-[40px]  h-[100vh] bg-[#FBF9F9]">
        <div className="container">
          <div className="container px-8 space-y-6">
            <h1 className="text-[32px] leading-[42px] text-gradient font-[700]">
              Blog
            </h1>
            <div className="w-full bg-[#F4E6E6] flex items-start justify-between rounded-xl p-6 gap-3">
              <div className="space-y-4">
                <h4 className="text-primaryColor text-[24px] leading-[50px]">CSR</h4>
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
      <section className="pt-[80px] pb-[80px] bg-[#FFFFFF]">
        <div className="container">
          <div className="container px-8 space-y-10">
            <div className="">
              <ul className="flex gap-4 text-[18px] leading-[25px]">
                <li className="bg-primaryColor text-white px-4 py-2 rounded-3xl cursor-pointer">
                  All
                </li>
                <li className="px-4 py-2 cursor-pointer">Finance</li>
                <li className="px-4 py-2 cursor-pointer">Business</li>
                <li className="px-4 py-2 cursor-pointer">CSR</li>
                <li className="px-4 py-2 cursor-pointer">Media</li>
              </ul>
            </div>
            <div className="inline-flex flex-wrap gap-[25px]">
              
            <div className="w-[558px] bg-[#F5F5F5] flex items-start justify-start rounded-[25px] p-6 gap-3">
              <figure className="h-full w-full">
                <img src={blogPost01} alt="" className="h-fit" />
              </figure>
              <div className="space-y-1">
                <div className="">
                  <h4 className="text-sm font-semibold">Finance</h4>
                  <h1 className="text-[24px] font-bold leading-[34px]">
                    All you need to know about the new portal
                  </h1>
                </div>
                <div>
                  <p className="text-[16px] leading-[26px] font-[400] text-[#606060]">
                    The new product we released is to help users monitor thier
                    assests and control it.
                  </p>
                  <span className="text-xs font-semibold">1 Oct, 2023 Femi OJ</span>
                </div>
                <div className="flex items-center gap-2 text-primaryColor text-sm">
                  <span>Read the story</span>
                  <HiArrowRight />
                </div>
              </div>
            </div>
            <div className="w-[558px] bg-[#F5F5F5] flex items-start justify-start rounded-[25px] p-6 gap-3">
              <figure className="h-full w-full">
                <img src={blogPost01} alt="" className="h-fit" />
              </figure>
              <div className="space-y-1">
                <div className="">
                  <h4 className="text-sm font-semibold">Finance</h4>
                  <h1 className="text-[24px] font-bold leading-[34px]">
                    All you need to know about the new portal
                  </h1>
                </div>
                <div>
                  <p className="text-[16px] leading-[26px] font-[400] text-[#606060]">
                    The new product we released is to help users monitor thier
                    assests and control it.
                  </p>
                  <span className="text-xs font-semibold">2 Oct, 2023 Femi OJ</span>
                </div>
                <div className="flex items-center gap-2 text-primaryColor text-sm">
                  <span>Read the story</span>
                  <HiArrowRight />
                </div>
              </div>
            </div>
            <div className="w-[558px] bg-[#F5F5F5] flex items-start justify-start rounded-[25px] p-6 gap-3">
              <figure className="h-full w-full">
                <img src={blogPost01} alt="" className="h-fit" />
              </figure>
              <div className="space-y-1">
                <div className="">
                  <h4 className="text-sm font-semibold">Finance</h4>
                  <h1 className="text-[24px] font-bold leading-[34px]">
                    All you need to know about the new portal
                  </h1>
                </div>
                <div>
                  <p className="text-[16px] leading-[26px] font-[400] text-[#606060]">
                    The new product we released is to help users monitor thier
                    assests and control it.
                  </p>
                  <span className="text-xs font-semibold">3 Oct, 2023 Femi OJ</span>
                </div>
                <div className="flex items-center gap-2 text-primaryColor text-sm">
                  <span>Read the story</span>
                  <HiArrowRight />
                </div>
              </div>
            </div>
            <div className="w-[558px] bg-[#F5F5F5] flex items-start justify-start rounded-[25px] p-6 gap-3">
              <figure className="h-full w-full">
                <img src={blogPost01} alt="" className="h-fit" />
              </figure>
              <div className="space-y-1">
                <div className="">
                  <h4 className="text-sm font-semibold">Finance</h4>
                  <h1 className="text-[24px] font-bold leading-[34px]">
                    All you need to know about the new portal
                  </h1>
                </div>
                <div>
                  <p className="text-[16px] leading-[26px] font-[400] text-[#606060]">
                    The new product we released is to help users monitor thier
                    assests and control it.
                  </p>
                  <span className="text-xs font-semibold">4 Oct, 2023 Femi OJ</span>
                </div>
                <div className="flex items-center gap-2 text-primaryColor text-sm">
                  <span>Read the story</span>
                  <HiArrowRight />
                </div>
              </div>
            </div>

            </div>
          </div>
        </div>
      </section>

      {/* In The News */}
      <section className="pt-[40px] pb-[150px] bg-[#FBF9F9]">
        <div className="container">
          <div className="container px-8 space-y-[25px]">
            <h1 className="text-[32px] leading-[50px] font-[700] text-gradient">
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
