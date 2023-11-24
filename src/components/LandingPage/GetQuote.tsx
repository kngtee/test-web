import  { useEffect, useState } from "react";
import { getQuoteData } from "../../assets/data/getQuoteData";
import HTMLReactParser from "html-react-parser";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

interface lifeAssuranceProps {
  productType: string;
  data: any[];
}

const GetQuote = () => {
  const [toggledNav, setToggledNav] = useState<string>("Saving and Investment");
  const [toggledNavData, setToggledNavData] = useState<any | null>();
  const [initialIndex, setInitialIndex] = useState<any>(0);

  const getTabData = () => {
    const tabData = getQuoteData.filter(
      (item: lifeAssuranceProps) => item.productType === toggledNav
    );
    setToggledNavData(tabData);
    console.log(toggledNavData);
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
      setInitialIndex( initialIndex - 1);
    } else {
      setInitialIndex(initialIndex - 1);
    }
  };

  const nextBtn = () => {
    //give me list of get quote based on selected nav
    const getQuoteList = getQuoteData.filter(
      (item: lifeAssuranceProps) => item.productType === toggledNav
    );
    // get length of selected tabNav
    const tabDataLength = getQuoteList.map((item) => item.data.length - 1);
    //iterate the index within the selected tabNav if not the same
    if (initialIndex !== Number(tabDataLength)) {
      setInitialIndex( initialIndex + 1);
    }
  };

  useEffect(() => {
    getTabData();
  }, []);

  return (
    <section>
      <div className="flex flex-col items-center">
        {/* tab bar */}
        <div className="flex flex-row justify-center gap-5 bg-[#F4E6E6] rounded-[56px] py-2">
          {getQuoteData.map((nav: any, index: number) => {
            return (
              <div key={index}>
                <button
                  onClick={() => {
                    setToggledNav(nav.productType);
                    getTabData();
                  }}
                  className={`font-normal text-[16px] ${
                    nav.productType === toggledNav
                      ? "text-[#FFFFFF]"
                      : "text-[#3F3F3F]"
                  } not-italic px-[15px] py-[12px] bg-gradient-to-r ${
                    nav.productType === toggledNav
                      ? "from-[#900000]"
                      : "from-transparent"
                  } ${
                    nav.productType === toggledNav
                      ? "to-[#D25050]"
                      : "to-transparent"
                  } rounded-[24px]`}
                >
                  {nav.productType}
                </button>
              </div>
            );
          })}
        </div>
        {/* image display */}
        <div className="w-[100%] h-[460px] mt-10">
          {toggledNavData &&
            toggledNavData.map((item: any, index: number) => {
              // return selected tabData product type
              return (
                <div
                  key={index}
                  className="w-[100%] justify-center flex flex-row"
                >
                  {item.data && (
                    <>
                      <img
                        src={item.data[initialIndex].img}
                        className="w-[80%] rounded-3xl h-[450px] brightness-50"
                      />
                      <div className="absolute opacity-100 w-[70%] pl-5">
                        <p className="text-[45px] font-bold text-[#FFFFFF] text-left pb-7 mt-[30px]">
                          {item.data[initialIndex].title}
                        </p>
                        {HTMLReactParser(item.data[initialIndex].desc)}
                        <div className="flex flex-row justify-start pt-5">
                          <button className="bg-[#FFFFFF] text-[white] w-[120px] h-[30px] rounded-3xl">
                            <span className="flex flex-row justify-around text-[#900000]">
                              Get Quote{" "}
                              <i className="pt-1">
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
        </div>
        {/* dots and button */}
        <div className="w-[78%] flex flex-row justify-between mt-4">
          <div>
            {toggledNavData &&
              toggledNavData.map((item: any, index: number) => {
                return (
                  <div key={index}>
                    <div></div>
                    <div className="flex flex-row gap-3">
                      {item.data &&
                        item.data.map((item: any, index: number) => {
                          return (
                            <div
                              className={`w-4 h-4 rounded-full ${
                                initialIndex === index
                                  ? "bg-[#900000]"
                                  : "bg-[#ccc6c6]"
                              }`}
                              key={index}
                            ></div>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
          </div>
          <div>
            <div className="flex flex-row gap-5">
              {initialIndex > 0 ? (
                <button
                  onClick={backBtn}
                  className="bg-[white] text-[white] w-[100px] h-[30px] rounded-3xl"
                >
                  <span className="flex flex-row justify-around text-[#900000]">
                    <i className="pt-1">
                      <GrLinkPrevious />
                    </i>
                    Back
                  </span>
                </button>
              ) : null}
              <button
                onClick={nextBtn}
                className="bg-[#900000] text-[white] w-[100px] h-[30px] rounded-3xl"
              >
                <span className="flex flex-row justify-around">
                  Next{" "}
                  <i className="pt-1">
                    <GrLinkNext />
                  </i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
