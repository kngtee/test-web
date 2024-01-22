import React from "react";

interface Props {
  title: string;
  subtitle: string;
  description: string;
}

const Hero: React.FC<Props> = ({ title, description, subtitle }) => {
  return (
    <section className="pt-[80px] h-[100dvh] bg-[#FBF9F9] hero__bg">
      <div className="container flex flex-col items-center justify-center h-[85%]">
        <h1 className="heading md:text-[3.75rem] md:leading-[4.375rem] font-[700]">{title}</h1>
        <p className="text-primaryColor md:text-[3.75rem] md:leading-[4.375rem] font-[700]">{subtitle}</p>
        <p className="text-[18px] leading-[28px] font-[400] text-[#3F3F3F] text-center max-w-[700px] mt-[20px]">{description}</p>
      </div>
    </section>
  );
};

export default Hero;
