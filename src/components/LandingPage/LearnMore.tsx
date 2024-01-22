
import { Button } from "../ui/button";
import { HiArrowRight } from "react-icons/hi2";

const LearnMore = () => {
  return (
    <>
      <section className="pt-[4rem] lg:h-100vh bg-[#F5F5F5]">
        <div className="container">
          <div className="flex-1 items-start justify-between space-y-[50px] max-w-[889px] ml-[50px]">
            <h2 className="text-[64px] leading-[70px] font-bold text-gradient">
              What we do
            </h2>
            <div className="w-full space-y-4">
              <p className="text-[22px] leading-[32px]">
                Custodian Life Assurance Limited (formerly Crusader Life
                Insurance Limited) is a specialist life insurance company
                incorporated in Nigeria and licensed by the National Insurance
                Commission to transact all classes of life insurance business.
              </p>
              <p className="text-[22px] leading-[32px]">
                Custodian Life Assurance Limited (CLA) is the subsidiary of
                Custodian Investment Plc, the holding company which is wholly
                owned by Nigerians. The Company is quoted on the Nigerian Stock
                Exchange.
              </p>
            </div>
            <Button className="bg-red-300 w-fit h-[50px] gap-[10px] text-red-900 text-[22px] leading-[32px] hover:text-gray-200">
              <span>Learn more</span>
              <span className="ml-2">
                <HiArrowRight />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnMore;
