/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import HTMLReactParser from "html-react-parser";
import { GrLinkNext } from "react-icons/gr";
import { Button } from "../ui/button";

interface getQuoteImageProps {
  data: any;
  index: number;
}

const GetQuoteImage: React.FunctionComponent<getQuoteImageProps> = ({
  data,
  index,
}) => {
  const toggledNavData: any = data;
  const initialIndex: number = index;
  return (
    <>
      {toggledNavData &&
        toggledNavData.map((item: any, index: number) => {
          // return selected tabData product type
          return (
            <div
              key={index}
              className='w-[100%] justify-center flex flex-row mt-10'>
              {item.data && (
                <>
                  <div className='w-[80%] bg-[#F4E6E6] flex flex-col md:flex-col lg:flex-row rounded-2xl overflow-hidden'>
                    <div className='flex flex-col p-10 w-[100%] md:w-[100%] lg:w-[60%]'>
                      <p className='text-[25px] md:text-[35px] lg:text-[45px] font-bold text-[#000000] text-left pb-3 md:pb-5 lg:pb-7 mt-[30px]'>
                        {item.data[initialIndex].title}
                      </p>
                      <p className='text-[14px] md:text-[18px] lg:text-[20px] font-normal text-[#3F3F3F] leading-loose'>
                        {HTMLReactParser(item.data[initialIndex].desc)}
                      </p>
                      <div className='flex flex-row justify-start pt-5'>
                        <button className='bg-[#FFFFFF] px-[7px] md:px-[20px] lg:px-[20px] py-[6px] md:py-[8px] lg:py-[8px] rounded-3xl '>
                          <div className='flex flex-row justify-between text-[#900000]'>
                            <p className='font-medium text-[12px] md:text-[16px] lg:text-[20px]'>
                              Learn more{" "}
                            </p>
                            <i className='pt-[1px] md:pt-[4px] lg:pt-[6px]  pl-4'>
                              <GrLinkNext color={"#900000"} />
                            </i>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className='w-[100%] md:w-[100%] lg:w-[40%] h-[100%] overflow-hidden'>
                      <img
                        src={item.data[initialIndex].img}
                        className='object-left brightness-50 w-full h-full'
                        alt='Image'
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
    </>
  );
};

export default GetQuoteImage;
