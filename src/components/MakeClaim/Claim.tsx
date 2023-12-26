import React from "react";
import Hero from "../Hero";
import { Formik, Form, Field } from "formik";
import { Button } from "../ui/button";

const Claim = () => {
  const initialValues = {
    fullname: "",
    email: "",
    dob: "",
    mobileNumber: "",
    policy: "",
    report: "",
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
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange }) => (
            <Form className=" px-10	py-10">
              <h1 className="text-[#900000] font-semibold text-xl mb-4">Fill the following details</h1>
             <div className="flex gap-4">
                <div className=" flex flex-col gap-4  w-[60%]"> <div className="grid grid-cols-2 gap-4 ">
                <Field
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  onChange={handleChange}
                  className="border border-solid border-[#6C8396] p-2"
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  className="border border-solid border-[#6C8396] p-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  onChange={handleChange}
                  className="border border-solid border-[#6C8396] p-2"
                />
                <Field
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  onChange={handleChange}
                  className="border border-solid border-[#6C8396] p-2"
                />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <Field
                  type="number"
                  name="policy"
                  placeholder="Policy Number"
                  onChange={handleChange}
                  className="border border-solid border-[#6C8396] p-2"/> </div>
                </div>
                <div className=" flex flex-col gap-6  w-[30%]">
                    <Field type="text" name="report" onChange={handleChange} className="  border border-solid border-[#6C8396] p-2 pb-16" placeholder="Report an Incident"/>
                    <Button type="submit" className="bg-[#900000] ">Make a Claim </Button>
                </div>
             </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Claim;
