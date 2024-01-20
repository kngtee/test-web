import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "../ui/button";
import heroImg from "../../assets/images/hero-img.png";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-[3rem] lg:h-[100vh] bg-[#FBF9F9]">
      <div className="container flex flex-col lg:flex-row gap-[3.75rem] items-center justify-between h-[80%]">
        {/* Hero Content Left */}
        <div className="lg:w-[56.25rem] space-y-5">
          <div className="flex flex-col items-start">
            <div className="text-[2.25rem] leading-[2.875rem] text-primaryColor font-[700] md:text-[3.75rem] md:leading-[4.375rem]">
              <Typewriter
                options={{
                  strings: ["Protecting", "Guarding", "Preserving"],
                  autoStart: true,
                  loop: true,
                  delay: 250,
                }}
              />
            </div>
            <h1 className="text-[2.25rem] leading-[2.875rem] text-black font-[700] md:text-[3.75rem] md:leading-[4.375rem]">
              you and everyone you love
            </h1>
          </div>
          <p className="text-[1.125rem]">
            We're more than a company - we're your lifelong partners in
            safeguarding the people and dreams you hold dear
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button className="w-full md:w-[12.5rem] h-[4.375rem] font-bold mb-1 md:mb-0">
              Get a Quote Now
            </Button>
            <Button
              className="w-full md:w-[12.5rem] h-[4.375rem] font-bold bg-[#F4E6E6] text-primaryColor hover:bg-[#F4E6E6]"
              onClick={() => navigate("/about-us")}
            >
              Learn More
            </Button>
          </div>
        </div>
        {/* Hero Image Right */}
        <div className="md:w-[43.75rem] md:mt-0 mt-2rem">
          <figure className="max-w-full lg:max-w-[60rem] mx-auto">
            <img className="w-full" src={heroImg} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
