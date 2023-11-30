/* eslint-disable @typescript-eslint/no-explicit-any */
import { management } from "@/assets/data/executives";
import { useState } from "react";
import { FaCircle } from "react-icons/fa6";

const MgtList = () => {
    const [desc, setDesc] = useState<any>(management[0].desc);
    const [active, setActive] = useState<number>(0);
  
    return (
      <>
        <div className="flex gap-6">
          <div className="mt-[38px]">
            {management.map((item: any, index: number) => (
              <div
                className="p-3 lg:p-5 rounded-[12px] border border-solid bg-[#F4E6E6] mb-5 cursor-pointer flex items-center justify-start gap-10 h-[80px] w-[500px] "
                onClick={() => {
                  setDesc(item.desc);
                  setActive(index);
                }}
                key={index}
              >
                <h1 className="font-semibold">{item.name}</h1>
                <h2 className="text-primaryColor font-semibold">
                  {item.position}
                </h2>
                {active === index && <FaCircle className={"text-[#900000]"} />}
              </div>
            ))}
          </div>
          <div className="mt-[38px] bg-primaryColor rounded-2xl h-fit w-[500px]">
            <div className="container py-5">
              <p className="text-[#F5F5F5]">{desc && desc}</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default MgtList;