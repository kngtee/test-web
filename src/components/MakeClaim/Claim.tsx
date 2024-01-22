import React from "react";
import Hero from "../Hero";
import { Formik, Form, Field } from "formik";
import { Button } from "../ui/button";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosArrowForward } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Claim = () => {
  const [isFocused, setIsFocused] = React.useState(false);

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
    <div>
      <div>
        <Hero
          title="Make A Claim, its Fast And Easy. "
          subtitle="No Story!"
          description=""
        />
      </div>
      <div className="mt-4">
        <Tabs
          className="flex flex-col items-center justify-center"
          defaultValue="makeClaim"
        >
          <TabsList list-style="none">
            <TabsTrigger
              value="makeClaim"
              className={"  outline-none bg-[#F4E6E6]"}
            >
              <h6>Make a claim</h6>
            </TabsTrigger>
            <TabsTrigger
              value="claims"
              className={" outline-none bg-[#F4E6E6]"}
            >
              <h6>Claim status</h6>
            </TabsTrigger>
          </TabsList>

          <div className="flex flex-row w-[100%]">
          <TabsContent value="makeClaim">
            <div className=" w-screen mb-10">
              <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
              >
                {({ handleChange }) => (
                  <Form className="px-10 py-10">
                    <h1 className="text-[#900000] font-semibold text-xl mb-4">
                      Fill the following details
                    </h1>
                    <div className="flex gap-4">
                      <div className=" flex flex-col gap-4  w-[60%]">
                        {" "}
                        <div className="grid grid-cols-2 gap-4 ">
                          <Field
                            type="text"
                            name="fullname"
                            placeholder="Full Name"
                            onChange={handleChange}
                            className="border border-solid rounded-lg  border-[#e4e5e7] p-2"
                          />
                          <Field
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            className="border border-solid rounded-lg  border-[#e4e5e7] p-2"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <Field
                            type="text"
                            name="mobileNumber"
                            placeholder="Mobile Number"
                            onChange={handleChange}
                            className="border border-solid rounded-lg  border-[#e4e5e7] p-2"
                          />
                          <Field
                            type={isFocused ? "date" : "text"}
                            name="dob"
                            placeholder="Date of Birth"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className="border border-solid rounded-lg  border-[#e4e5e7] p-2"
                          />
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                          <Field
                            type="number"
                            name="policy"
                            placeholder="Policy Number"
                            onChange={handleChange}
                            className="border border-solid rounded-lg  border-[#e4e5e7] p-2"
                          />{" "}
                        </div>
                      </div>
                      <div className=" flex flex-col gap-6  w-[30%]">
                        <Field
                          type="text"
                          name="report"
                          onChange={handleChange}
                          className="  border border-solid rounded-lg  border-[#e4e5e7] p-2 pb-16"
                          placeholder="Report an Incident"
                        />
                        <Button type="submit" className="bg-[#900000] ">
                          <span className="flex  gap-10 items-center ">
                            Make a Claim <IoIosArrowForward />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </TabsContent></div>
          <div className="flex flex-row w-[98%] mt-4 mb-10">
            <TabsContent className="" value="claims">
              <div className="flex flex-col w-screen mt-4 px-10">
                <h1 className="text-[#900000] font-semibold text-xl">
                  Enter claim number
                </h1>
                <p className=" text-sm mt-4">
                  Check your claim status today by providing your claim number
                  <br /> for faster assistance
                </p>

                <Formik
                  initialValues={initialValues}
                  onSubmit={(values) => console.log(values)}
                >
                  {({ handleChange }) => (
                    <Form className="grid grid-cols-1 gap-4 w-[40%] ">
                      <Field
                        type="text"
                        name="claimNumber"
                        onChange={handleChange}
                        className="border border-solid rounded-lg  border-[#e4e5e7] p-2 mt-2"
                        placeholder="Claim Number"
                      />
                      <Button type="submit" className="bg-[#900000] my-2 w-[50%] ">
                        <div className="  flex justify-between items-center gap-2 ">
                          Check Status <IoIosArrowForward />
                        </div>
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Claim;
