import OurExecutives from "../components/AboutUs/Tab";
import Hero from "../components/Hero";

const About = () => {
  return (
    <>
      <Hero
        title="All you need to know about"
        subtitle="Custodian Life Assurance"
        description="Your dedicated ally in ensuring life's uncertainties and achieving financial aspirations. Explore Custodian Life Assurance today."
      />
      {/* About Us Write up */}
      <section className="bg-[#F5EFEF]">
        <div className="container px-[50px]">
          <h1 className="heading text-gradient">About Us</h1>
          <div className="flex flex-col gap-2 max-w-[700px] mt-[50px]">
            <p className="text-[22px] leading-[32px] font-[400] text-[#606060]">
              Custodian Life Assurance Limited (formerly Crusader Life Insurance
              Limited) is a specialist life insurance company incorporated in
              Nigeria and licensed by the National Insurance Commission to
              transact all classes of life insurance business. Custodian Life
              Assurance Limited (CLA) is the subsidiary of Custodian Investment
              Plc, the holding company which is wholly owned by Nigerians.
            </p>
            <p className="text-[22px] leading-[32px] font-[400] text-[#606060] mt-[25px]">
              The Company is quoted on the Nigerian Stock Exchange. CLA started
              insurance business in 1956 as a foreign office of Crusader
              Insurance Company Ltd, Reigate UK. It became a public company in
              1989 and listed on the Nigeria Stock Exchange in 1990.
            </p>
            <p className="text-[22px] leading-[32px] font-[500] text-[#606060] mt-[50px]">
              Following the merger of the parent company, Crusader Nigeria Plc
              with the Custodian and Allied Insurance Plc, it was renamed
              Custodian Life Assurance Limited to reflect the new brand of the
              emerging entity. Other companies in the Custodian Investment Plc
              Group are:
              <ul className="list-disc list-inside">
                <li>Custodian and Allied Insurance Limited</li>
                <li>CrusaderSterling Pensions Limited</li>
                <li>UPDC Plc</li>
                <li>Custodian Trustees Limited</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Goals */}
      <section className="bg-[#FFFFFF]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[25px] items-center justify-center">
            <div className=" flex flex-col gap-[25px] ">
              <div className="bg-[#F5F5F5] rounded-[25px] max-w-[557px] h-[367px] p-3">
                <div className="container py-8 items-center justify-center">
                  <span className="font-[500] text-[26px] leading-[30px] text-[#3F3F3F]">Our Vision</span>
                  <h1 className="text-[64px] leading-[70px] font-[700] mt-[30px] text-gradient">
                    To be African's Insurer of Choice.
                  </h1>
                </div>
              </div>
              <div className="bg-[#F5F5F5] rounded-[25px] max-w-[557px] h-[367px] p-3">
                <div className="container py-8 items-center justify-between">
                  <span className="text-primaryColor font-[500] text-[26px] leading-[30px]">
                    Our Mission
                  </span>
                  <p className="text-[26px] leading-[38.5px] font-[400] text-[#3F3F3F] mt-[30px]">
                    CLA’s mission is to develop and deliver innovative insurance
                    products that best satisfy customer needs, whilst operating
                    a highly profitable, efficient, resourceful and ethical
                    organisation.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#F5F5F5] rounded-[25px] max-w-[557px] h-[759px] p-3">
              <div className="container py-8 items-center justify-between">
                <span className="text-primaryColor text-[26px] leading-[30px] font-[500]">
                  Our Goals
                </span>
                <ul className="list-disc list-inside text-[24px] leading-[35.62px] font-[400] text-[#3F3F3F] mt-[30px] space-y-3">
                  <li className="">
                    To position ourselves strategically in the market and be
                    perceived as a modern, dynamic and resourceful insurance
                    company.
                  </li>
                  <li className="">
                    To strike a fine balance between the businesses of sound
                    underwriting, cost control and service on one hand and
                    investment on the other.
                  </li>
                  <li className="">
                    To assemble a seasoned team of professionals who would, with
                    the aid of modern information processing techniques, deliver
                    qualitative, fast and efficient service to our select
                    clientele.
                  </li>
                  <li className="">
                    To provide services that extend beyond national frontiers
                    and ultimately establish and operate in the ECOWAS
                    sub-region.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Executives */}
      <section className="bg-[#FBF9F9]">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-[50px]">
            <h1 className="heading text-gradient">Our Executives</h1>
            <OurExecutives />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
