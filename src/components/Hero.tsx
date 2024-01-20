import React from "react";

interface Props {
  title: string;
  subtitle: string;
  description: string;
}

const Hero: React.FC<Props> = ({ title, description, subtitle }) => {
  return (
    <section className="pt-[3rem] h-[100dvh] bg-[#FBF9F9]">
      <div className="container flex flex-col items-center justify-center h-[80%]">
        <h1 className="heading md:text-[3.75rem] md:leading-[4.375rem] font-semibold">{title}</h1>
        <p className="text-primaryColor md:text-[3.75rem] md:leading-[4.375rem]">{subtitle}</p>
        <p className="text__para text-center max-w-[37.5rem]">{description}</p>
      </div>
    </section>
  );
};

export default Hero;
