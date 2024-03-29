import React from "react";
import { GrLinkNext } from "react-icons/gr";

interface getQuoteTabBar {
  data: any;
  nav: string;
  getTabData: (type: string) => void;
}

const GetQuoteTabBar: React.FunctionComponent<getQuoteTabBar> = ({
  data,
  nav,
  getTabData,
}) => {
  const getQuoteData: any = data;
  const toggledNav: string = nav;
  return (
    <>
      <div className='flex flex-row justify-center gap-5 bg-[#F4E6E6] rounded-[56px] py-[0px] md:py-[1.5px] lg:py-[2px] px-[4px]'>
        {getQuoteData.map((nav: any, index: number) => {
          return (
            <div key={index}>
              <button
                onClick={() => {
                  getTabData(nav.productType);
                }}
                className={`font-normal text-[10px] md:text-[14px] lg:text-[16px] ${
                  nav.productType === toggledNav
                    ? "text-[#FFFFFF]"
                    : "text-[#3F3F3F]"
                } not-italic px-[15px] py-[6px] md:py-[9px] lg:py-[12px] bg-gradient-to-r ${
                  nav.productType === toggledNav
                    ? "from-[#900000]"
                    : "from-transparent"
                } ${
                  nav.productType === toggledNav
                    ? "to-[#D25050]"
                    : "to-transparent"
                } rounded-[24px]`}>
                {nav.productType}
              </button>
            </div>
          );
        })}
        <div>
          <a href='#'>
            <button className='font-normal text-[12px] md:text-[14px] lg:text-[16px] text-[#900000] opacity-80 flex py-3 gap-2'>
              <i className='not-italic hidden md:hidden lg:block'>
                Take a recommendation quiz
              </i>{" "}
              <GrLinkNext />
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default GetQuoteTabBar;
