
import React from "react";	
import { Formik, Form, Field} from "formik";
import { ContactValidation } from "./ContactValidation";
import { Button } from "./ui/button";
import { IoIosArrowForward } from "react-icons/io";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  return (
    <div className="md:grid md:grid-cols-3 flex-col md:flex-row lg:flex-row gap-10  mt-5 px-[100px] py-[50px]">
      <div className="col-span-2 flex flex-col">
        <h1 className="text-[#900000]  text-[38px] font-[500] leading-[45px]">
          Share your ideas, inquiries and provide feedback
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={ContactValidation}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange}) => (
            <Form className="flex flex-col gap-[25px] mt-4">
              <div className="flex gap-[25px]">
                <Field
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="border border-solid h-[60px] w-[320px] border-[#E5E5E5] px-[15px] py-[20px] rounded-[7.5px]"
                  placeholder="Full Name"
                />
                <Field
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="border border-solid h-[60px] w-[320px] border-[#E5E5E5] px-[15px] py-[20px] rounded-[7.5px]"
                  placeholder="Email"
                />
              </div>
              <div className="grid grid-cols-2">
                <Field
                  type="text"
                  name="subject"
                  onChange={handleChange}
                  placeholder="Subject"
                  className="border border-solid h-[60px] w-[665px] border-[#E5E5E5] px-[15px] py-[20px] rounded-[7.5px]"
                />
              </div>
              <div className="grid grid-cols-2">
                <Field
                  type="text"
                  name="message"
                  onChange={handleChange}
                  placeholder="Message"
                  className="border border-solid h-[145px] w-[665px] border-[#E5E5E5] px-[15px] py-[20px] rounded-[7.5px]"
                />
              </div>
              <div>
                <Button type="submit"  className=" items-center flex justify-between text-[22px] leading-[30px] font-[500] h-fit w-[220px]  mt-4">
                 <h4>Send</h4> <IoIosArrowForward/>
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className=" mt-[80px] p-[25px] flex flex-col gap-[25px]   bg-[#F5F5F5] h-fit w-fit  border-[4px] border-[#e5e5e5] rounded-[14px]">
        <div>
          <h1 className="font-semibold text-lg">The Office</h1>
          <p className="text-sm">
            Address: 16A, Commercial Avenue, Sabo, Yaba, Lagos
          </p>
          <p className="text-sm">Phone: (+234)12774000-9</p>
          <p className="text-sm">Email: carecentre@custodianinsurance.com</p>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Business Hours</h1>
          <p className="text-sm">Monday - Friday: 9am to 5pm</p>
          <p className="text-sm">Saturday: Closed</p>
          <p className="text-sm">Sunday: Closed</p>
        </div>
        <button className="bg-[#900000] font-medium bg-gradient-to-b from-[#D25050] from-5% to-[#900000] to-95%  items-center text-white rounded-lg justify-between flex px-4 py-6"><h4>Take a quick survey</h4><IoIosArrowForward/></button>
      </div>
    </div>
  );
};

export default ContactForm