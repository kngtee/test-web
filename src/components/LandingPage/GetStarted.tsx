import { Button } from "../ui/button";
import heroImg from "../../assets/images/hero-img.png";

const getStarted = () => {
  return (
    <section className="pt-[60px] 2xl:h-[800px] bg-[#FBF9F9]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* Hero Content Left */}
          <div className="lg:w-[890px] space-y-5">
            <h1 className="text-[36px] leading-[46px] text-black font-[700] md:text-[60px] md:leading-[70px]">
              <span className="text-primaryColor">Protecting</span> you and
              everyone you love
            </h1>
            <p className="max-w-[450px] text-[18px]">
              We're more than a company - we're your lifelong partners in
              safeguarding the people and dreams you hold dear
            </p>
            <Button className="w-[200px] h-[50px] font-bold">Get Started</Button>
          </div>
          <div className="">
            <figure className="max-w-[720px]">
              <img className="w-full" src={heroImg} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default getStarted;
