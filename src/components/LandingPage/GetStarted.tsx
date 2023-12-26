import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "../ui/button";
import heroImg from "../../assets/images/hero-img.png";

const getStarted = () => {
  return (
    <section className="pt-[60px] 2xl:h-[800px] bg-[#FBF9F9]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[60px] items-center justify-between">
          {/* Hero Content Left */}
          <div className="lg:w-[900px] space-y-5">
            <div className="flex flex-col items-start">
              <div className="text-[36px] leading-[46px] text-primaryColor font-[700] md:text-[60px] md:leading-[70px]">
                <Typewriter
                  options={{
                    strings: ["Protecting", "Guarding", "Preserving"],
                    autoStart: true,
                    loop: true,
                    delay: 250,
                  }}
                />
              </div>
              <h1 className="text-[36px] leading-[46px] text-black font-[700] md:text-[60px] md:leading-[70px]">
                you and everyone you love
              </h1>
            </div>
            <p className="text-[18px]">
              We're more than a company - we're your lifelong partners in
              safeguarding the people and dreams you hold dear
            </p>
            <Button className="w-[200px] h-[50px] font-bold">Learn more</Button>
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
