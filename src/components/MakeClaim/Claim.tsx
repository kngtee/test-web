import React, { useState } from "react";
import Hero from "../Hero";
import { Formik, Form, Field } from "formik";
import { Button } from "../ui/button";
import "react-tabs/style/react-tabs.css";
import { IoIosArrowForward } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Claim = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [claimStatus, setClaimStatus] = useState("");

  const handleClaimStatusClick = () => {
    console.log("Claim Status:", claimStatus);
  };

  const [activetab, setActivetab] = useState<string>("makeClaim");
  const initialValues = {
    fullname: "",
    email: "",
    dob: "",
    mobileNumber: "",
    policy: "",
    report: "",
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="">
      <div>
        <Hero
          title="Make A Claim, its Fast And Easy. "
          subtitle="No Story!"
          description=""
        />
      </div>
      <div className="pt-[50px] bg-white">
        <Tabs
          className="flex flex-col items-center justify-center"
          defaultValue="makeClaim"
        >
          <TabsList list-style="none">
            <TabsTrigger
              onClick={() => {
                setActivetab("makeClaim");
              }}
              value="makeClaim"
              className={`outline-none bg-[#F4E6E6] px-[15px] py-[12px] ${
                activetab === "makeClaim" &&
                "bg-gradient-to-b from-[#D25050] from-5% to-[#900000] to-95%"
              }`}
            >
              Make a claim
            </TabsTrigger>
            <TabsTrigger
              onClick={() => {
                setActivetab("claims");
              }}
              value="claims"
              className={`outline-none px-[15px] py-[12px]  bg-[#F4E6E6] ${ activetab === "claims" &&
              "bg-gradient-to-b from-[#D25050] from-5% to-[#900000] to-95%"}`}
            >
              Claim status
            </TabsTrigger>
          </TabsList>

          <div className="flex flex-row ">
            <TabsContent value="makeClaim">
              <div className=" ">
                <Formik
                  initialValues={initialValues}
                  onSubmit={(values) => console.log(values)}
                >
                  {({ handleChange }) => (
                    <Form className="px-20 py-10">
                      <h1 className="text-[#900000] font-[500] text-[26px] leading-[30px] mb-[40px]">
                        Fill the following details
                      </h1>
                      <div className="flex gap-[25px]">
                        <div className="flex flex-col gap-[25px]">
                          <div className="  space-x-[25px] ">
                            <Field
                              type="text"
                              name="fullname"
                              placeholder="Full Name"
                              onChange={handleChange}
                              className="border border-solid rounded-lg border-[#e5e5e5] w-[320px] h-[60px] py-[20px] px-[15px]"
                            />
                            <Field
                              type="email"
                              name="email"
                              placeholder="Email"
                              onChange={handleChange}
                              className="border border-solid rounded-lg border-[#e5e5e5] w-[320px] h-[60px] py-[20px] px-[15px]"
                            />
                          </div>
                          <div className=" space-x-[25px]">
                            <Field
                              type="text"
                              name="mobileNumber"
                              placeholder="Mobile Number"
                              onChange={handleChange}
                              className="border border-solid rounded-lg border-[#e5e5e5] w-[320px] h-[60px] py-[20px] px-[15px]"
                            />
                            <Field
                              type={isFocused ? "date" : "text"}
                              name="dob"
                              placeholder="Date of Birth"
                              onChange={handleChange}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              className="border border-solid rounded-lg border-[#e5e5e5] w-[320px] h-[60px] py-[20px] px-[15px]"
                            />
                          </div>
                          <div className="space-y-[25px] space-x-[25px]">
                            <Field
                              type="number"
                              name="policy"
                              placeholder="Policy Number"
                              onChange={handleChange}
                              className="border border-solid rounded-lg border-[#e5e5e5] w-[665px] h-[60px] py-[20px] px-[15px] "
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[25px] w-[30%]">
                          <Field
                            type="text"
                            name="report"
                            onChange={handleChange}
                            className="border border-solid rounded-lg border-[#e5e5e5] w-[320px] h-[145px] py-[20px] px-[15px]"
                            placeholder="Report an Incident"
                          />
                          <Button
                            type="submit"
                            className="bg-[#900000] w-[320px] h-[50px] py-[10px] px-[20px] text-[16px] font-[500] leading-[30px] rounded-[40px] flex items-center justify-between"
                          >
                            Make a Claim <IoIosArrowForward />
                          </Button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </TabsContent>
          </div>
          <div className="flex flex-row w-[98%] mt-4 mb-10">
            <TabsContent className="" value="claims">
              <div className="flex flex-col  mt-4 px-10">
                <h1 className="text-[#900000] text-[26px] font-[500] leading-[30px]">
                  Enter claim number
                </h1>
                <p className="text-[18px] text-[#606060] leading-[30px] f0nt-[400] mt-4">
                  Check your <span className=" text-[#3f3f3f] font-[500]">claim status</span> today by providing your claim number
                  <br /> for faster assistance
                </p>
                <div className="grid grid-cols-1 mt-[30px] gap-4 w-[40%]">
                  <input
                    type="text"
                    value={claimStatus}
                    onChange={(e) => setClaimStatus(e.target.value)}
                    className="border border-solid rounded-[7.5px] py-[20px] px-[15px] border-[#e5e5e5] w-[502px] h-[60px] mt-2"
                    placeholder="Claim Number"
                  />
                  <Button
                    onClick={handleClaimStatusClick}
                    type="button"
                    className="bg-[#900000] mt-[30px] text-[22px] leading-[30px]  font-[500] w-[219px] py-[10px] px-[20px] h-[50px] rounded-[40px] flex justify-between items-center "
                  >
                      <h4>Check Status </h4><IoIosArrowForward />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Claim;
