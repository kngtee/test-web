/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { getQuoteData } from "../../assets/data/getQuoteData";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import GetQuoteImage from "./GetQuoteImage";
import GetQuoteTabBar from "./GetQuoteTabBar";
import GetQuoteDots from "./GetQuoteDots";
import { Button } from "../ui/button";

const GetQuote: React.FunctionComponent<{}> = () => {
  const [toggledNav, setToggledNav] = useState<string>("Saving and Investment");
  const [toggledNavData, setToggledNavData] = useState<any | null>(
    getQuoteData
  );
  const [initialIndex, setInitialIndex] = useState<any>(0);

  const getTabData = (type: string) => {
    const tabData = getQuoteData.filter(
      (item: any) => item.productType === type
    );

    setToggledNavData(tabData);
    setToggledNav(tabData[0].productType);
    setInitialIndex(0);
  };

  const backBtn = () => {
    //give me list of get quote based on selected nav
    const getQuoteList = getQuoteData.filter(
      (item: any) => item.productType === toggledNav
    );
    // get length of selected tabNav
    const tabDataLength = getQuoteList.map((item) => item.data.length - 1);
    //iterate the index within the selected tabNav if not the same
    if (initialIndex === Number(tabDataLength)) {
      setInitialIndex(initialIndex - 1);
    } else {
      setInitialIndex(initialIndex - 1);
    }
  };

  const nextBtn = () => {
    //give me list of get quote based on selected nav
    const getQuoteList = getQuoteData.filter(
      (item: any) => item.productType === toggledNav
    );
    // get length of selected tabNav
    const tabDataLength = getQuoteList.map((item) => item.data.length - 1);
    //iterate the index within the selected tabNav if not the same
    if (initialIndex !== Number(tabDataLength)) {
      setInitialIndex(initialIndex + 1);
    }
  };

  useEffect(() => {
    getTabData(toggledNav);
  }, []);

  return (
    <section>
      <div className='flex flex-col items-center'>
        {/* tab bar */}
        <div className='flex flex-row justify-center gap-5 bg-[#F4E6E6] rounded-[56px] py-[0.7rem] md:py-2 lg:py-2 px-2'>
          <GetQuoteTabBar
            data={getQuoteData}
            nav={toggledNav}
            getTabData={getTabData}
          />
        </div>
        {/* image display */}
        <GetQuoteImage data={toggledNavData} index={initialIndex} />
        {/* dots, next and prev button */}
        <div className='w-[78%] flex flex-row justify-between mt-4'>
          <div>
            <GetQuoteDots data={toggledNavData} index={initialIndex} />
          </div>
          <div>
            <div className='flex flex-row gap-5 pt-4'>
              {initialIndex > 0 ? (
                <button
                  className='bg-[#900000] px-[7px] md:px-[20px] lg:px-[20px] py-[6px] md:py-[8px] lg:py-[8px] rounded-3xl'
                  onClick={backBtn}>
                  <div className='flex flex-row justify-between text-[#FFFFFF]'>
                    <i className='pt-[1px] md:pt-[4px] lg:pt-[6px]  pr-4'>
                      <GrLinkPrevious color={"#FFFFFF"} />
                    </i>
                    <p className='font-medium text-[12px] md:text-[16px] lg:text-[20px]'>
                      Back
                    </p>
                  </div>
                </button>
              ) : null}
              <button
                className='bg-[#900000] px-[7px] md:px-[20px] lg:px-[20px] py-[6px] md:py-[8px] lg:py-[8px] rounded-3xl'
                onClick={nextBtn}>
                <div className='flex flex-row justify-between text-[#FFFFFF]'>
                  <p className='font-medium text-[12px] md:text-[16px] lg:text-[20px]'>
                    Next
                  </p>
                  <i className='pt-[1px] md:pt-[4px] lg:pt-[6px] pl-4'>
                    <GrLinkNext color={"#FFFFFF"} />
                  </i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
