
import Typewriter from "typewriter-effect";
import { Button } from "../ui/button";
import heroImg from "../../assets/images/hero-img.png";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#FBF9F9] h-[100vh] md:pb-[600px]">
      <div className="w-full items-start justify-center]">
        <div className="flex items-center justify-between mx-auto px-[80px] 2xl:px-[150px]">
          {/* Hero Content Left */}
          <div className="w-[550px] space-y-[50px]">
            <div className="space-y-[30px]">
              <div>
                <span className="text-[58px]  leading-[68px] text-primaryColor font-[700]">
                  <Typewriter
                    options={{
                      strings: ["Protecting", "Guarding", "Preserving"],
                      autoStart: true,
                      loop: true,
                      delay: 250,
                    }}
                  />
                </span>
                <h1 className="text-[58px] leading-[68px] text-black font-[700]">
                  you and everyone you love
                </h1>
              </div>
              <p className="text-[24px] leading-[34px] font-[400] ">
                We're more than a company - we're your lifelong partners in
                safeguarding the people and dreams you hold dear
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-[50px]">
              <Button className="w-[236px] h-[70px] font-[700] rounded-[50px] text-[18px] leading-[30px]">
                Get a Quote Now
              </Button>
              <Button
                className="w-[236px] h-[70px] font-[700] bg-[#F4E6E6] rounded-[50px] text-[18px] leading-[30px] text-primaryColor hover:bg-[#F4E6E6]"
                onClick={() => navigate("/about-us")}
              >
                Learn More
              </Button>
            </div>
          </div>
          {/* Hero Image Right */}
          <div className="w-[550px] 2xl:w-[650px]">
            <figure className="flex-shrink-0">
              <img className="w-full" src={heroImg} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
