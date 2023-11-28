import { useEffect, useState } from "react";
import { getQuoteData } from "../../assets/data/getQuoteData";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import GetQuoteImage from "./GetQuoteImage";
import GetQuoteTabBar from "./GetQuoteTabBar";
import GetQuoteDots from "./GetQuoteDots";

const GetQuote: React.FunctionComponent<{}> = () => {
  const [toggledNav, setToggledNav] = useState<string>("Saving and Investment");
  const [toggledNavData, setToggledNavData] = useState<any | null>(
    getQuoteData
  );
  const [initialIndex, setInitialIndex] = useState<any>(0);

  const getTabData = (type: string, index: number) => {
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
    getTabData(toggledNav, 0);
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
        <div className='w-[100%] h-[460px] mt-10'>
          <GetQuoteImage data={toggledNavData} index={initialIndex} />
        </div>
        {/* dots, next and prev button */}
        <div className='w-[78%] flex flex-row justify-between mt-4'>
          <div>
            <GetQuoteDots data={toggledNavData} index={initialIndex} />
          </div>
          <div>
            <div className='flex flex-row gap-5'>
              {initialIndex > 0 ? (
                <button
                  onClick={backBtn}
                  className='bg-[white] text-[white] w-[100px] h-[30px] rounded-3xl'>
                  <span className='flex flex-row justify-around text-[#900000]'>
                    <i className='pt-1'>
                      <GrLinkPrevious />
                    </i>
                    Back
                  </span>
                </button>
              ) : null}
              <button
                onClick={nextBtn}
                className='bg-[#900000] text-[white] w-[100px] h-[30px] rounded-3xl'>
                <span className='flex flex-row justify-around'>
                  Next{" "}
                  <i className='pt-1'>
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
