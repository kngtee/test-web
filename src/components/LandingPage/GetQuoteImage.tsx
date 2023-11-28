import React from "react";
import HTMLReactParser from "html-react-parser";
import { GrLinkNext } from "react-icons/gr";

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
            <div key={index} className='w-[100%] justify-center flex flex-row'>
              {item.data && (
                <>
                  <img
                    src={item.data[initialIndex].img}
                    className='rounded-3xl w-[90%] md:w-[85%] lg:w-[80%] h-[370px] md:h-[400px] lg:h-[450px] brightness-50 absolute'
                  />
                  <div className='absolute opacity-100 w-[80%] pl-2 md:pl-7 lg:pl-10 mt-1 md:mt-3 lg:mt-5'>
                    <p className='text-[25px] md:text-[35px] lg:text-[45px] font-bold text-[#FFFFFF] text-left pb-3 md:pb-5 lg:pb-7 mt-[30px]'>
                      {item.data[initialIndex].title}
                    </p>
                    {HTMLReactParser(item.data[initialIndex].desc)}
                    <div className='flex flex-row justify-start pt-5'>
                      <button className='bg-[#FFFFFF] text-[white] w-[120px] h-[30px] rounded-3xl'>
                        <span className='flex flex-row justify-around text-[#900000]'>
                          Get Quote{" "}
                          <i className='pt-1'>
                            <GrLinkNext color={"#900000"} />
                          </i>
                        </span>
                      </button>
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
