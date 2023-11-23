import { Button } from "../ui/button";
import { HiArrowRight } from "react-icons/hi2";

const LearnMore = () => {
  return (
    <>
      <section className="pt-[60px] pb-[220px] 2xl:h-[800px] bg-[#F5F5F5]">
        <div className="container space-y-10">
          <div className="container space-y-6 px-10">
            <h2 className="text-[48px] leading-[58px] font-bold text-[#900000]">
              What we do
            </h2>
            <div className="max-w-[650px] space-y-4">
              <p className="">
                Custodian Life Assurance Limited (formerly Crusader Life
                Insurance Limited) is a specialist life insurance company
                incorporated in Nigeria and licensed by the National Insurance
                Commission to transact all classes of life insurance business.
              </p>
              <p className="">
                Custodian Life Assurance Limited (CLA) is the subsidiary of
                Custodian Investment Plc, the holding company which is wholly
                owned by Nigerians. The Company is quoted on the Nigerian Stock
                Exchange.
              </p>
            </div>
            <Button className="bg-[#D39999] text-[#900000] hover:text-[#f5f5f5]">
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
