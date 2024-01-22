/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useState, useRef, useEffect } from "react";
import claLogo from "../assets/images/cla-logo.png";
import { Button } from "../components/ui/button";
import { FaChevronDown } from "react-icons/fa6";
import { RiMenuLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const MenuNavigation = () => {
  const navigate = useNavigate();
  const [submenu, setSubmenu] = useState(false);
  const [submenu2, setSubmenu2] = useState(false);
  const [selectedLink, setSelectedLink] = useState<string>();
  const menuRef = useRef<any>(null);

  const handleLink = (link: string) => {
    setSelectedLink(link);
  };

  const toggleMenu = () => {
    setSubmenu(!submenu);
  };

  const toggleMenu2 = () => {
    setSubmenu2(!submenu2);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: { target: any }) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSubmenu(false);
        setSubmenu2(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuRef]);

  return (
    <div className="flex flex-row items-center justify-between  bg-[#FBF9F9] pt-[50px] px-[100px]  pb-[30px] ">
      <div className="flex items-center justify-center">
        <img src={claLogo} alt="logo" className=" h-[40px] md:h-[65.5px]" />
      </div>
      <div
        className=" md:flex hidden rounded-[50px] px-[10px] py-[5px] items-center justify-between bg-[white] drop-shadow-xl h-[63px]"
        ref={menuRef}
      >
        <ul className="flex flex-row  ">
          <li
            onClick={() => {
              navigate("/");
              handleLink("Home");
            }}
            className={`py-[10px] px-[15px] w-[full] cursor-pointer hover:font-bold  flex  items-center justify-center h-[43px] ${
              selectedLink === "Home"
                ? " bg-[#900000] text-white rounded-[50px] "
                : ""
            }`}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/about-us");
              handleLink("About us");
            }}
            className={`py-[10px] px-[15px] w-[full] h-[43px] cursor-pointer  flex align-middle hover:font-bold  ${
              selectedLink === "About us"
                ? "bg-[#900000] text-white rounded-[50px]"
                : ""
            }`}
          >
            About Us
          </li>
          <li
            onClick={toggleMenu}
            className={`py-[10px] px-[15px] w-[full] h-[43px] relative cursor-pointer  flex hover:font-bold  ${
              selectedLink === "Savings and Investment" ||
              selectedLink === "Protection Policies" ||
              selectedLink === "Endowment Policies" ||
              selectedLink === "Annuities" ||
              selectedLink === "Corporate"
                ? "bg-[#900000] text-white rounded-[50px]"
                : ""
            }`}
          >
            Products <FaChevronDown className=" w-[10px] h-[10px] ml-1 mt-2" />
            {submenu && (
              <ul className="absolute left-0 mt-10 hover:font-normal bg-white border rounded   text-gray-700 shadow-md w-[200px]">
                <li
                  className=" py-2 pl-2 hover:font-semibold text-sm"
                  onClick={() => {
                    navigate("/products/Saving And Investment");
                    handleLink("Savings and Investment");
                  }}
                >
                  Savings and Investment
                </li>
                <li
                  className=" py-2 pl-2 hover:font-semibold text-sm"
                  onClick={() => {
                    navigate("/products/Protection Policies");
                    handleLink("Protection Policies");
                  }}
                >
                  Protection Policies
                </li>
                <li
                  className=" py-2 pl-2 hover:font-semibold text-sm"
                  onClick={() => {
                    navigate("/products/Endowment Policies");
                    handleLink("Endowment Policies");
                  }}
                >
                  Endowment Policies
                </li>
                <li
                  className=" py-2 pl-2 hover:font-semibold text-sm"
                  onClick={() => {
                    navigate("/products/Annuity");
                    handleLink("Annuities");
                  }}
                >
                  Annuities
                </li>
                <li
                  className=" py-2 pl-2 hover:font-semibold text-sm"
                  onClick={() => {
                    navigate("/products/Corporate");
                    handleLink("Corporate");
                  }}
                >
                  Corporate{" "}
                </li>
              </ul>
            )}
          </li>
          <li
            onClick={() => {
              navigate("/media");
              handleLink("media");
            }}
            className={`py-[10px] px-[15px] w-[full] h-[43px] cursor-pointer flex align-middle hover:font-bold  ${
              selectedLink === "media"
                ? "bg-[#900000] text-white rounded-[50px]"
                : ""
            }`}
          >
            Media
          </li>
          <li
            onClick={() => {
              navigate("/claim");
              handleLink("Make a Claim");
            }}
            className={`py-[10px] px-[15px] w-[full] h-[43px] cursor-pointer flex align-middle hover:font-bold  ${
              selectedLink === "Make a Claim"
                ? "bg-[#900000] text-white rounded-[50px]"
                : ""
            }`}
          >
            Make a Claim
          </li>
          <li
            onClick={toggleMenu2}
            className={` relative py-[10px] px-[15px] w-[full] h-[43px]cursor-pointer flex align-middle hover:font-bold  ${
              selectedLink === "Corporates" ||
              selectedLink === "Downloads" ||
              selectedLink === "FAQs" ||
              selectedLink === "Finacials"
                ? "bg-[#900000] text-white rounded-[50px]"
                : ""
            }`}
          >
            Resources <FaChevronDown className=" w-[10px] h-[10px] ml-1 mt-2" />
            {submenu2 && (
              <ul className="absolute left-0 mt-10 bg-white border rounded hover:font-normal  justify-center px- text-gray-700 shadow-md">
                <li
                  className="p-2 hover:font-semibold text-sm"
                  onClick={() => {
                    navigate("/resources/FAQs");
                    handleLink("FAQs");
                  }}
                >
                  FAQs
                </li>
                <li
                  className="p-2 hover:font-semibold text-sm"
                  onClick={() => {
                    navigate("/resources/Financials");
                    handleLink("Finacials");
                  }}
                >
                  Finacials
                </li>
                <li
                  className="p-2 hover:font-semibold text-sm"
                  onClick={() => {
                    navigate("/resources/Downloads");
                    handleLink("Downloads");
                  }}
                >
                  Downloads
                </li>
                <li
                  className="p-2 hover:font-semibold text-sm"
                  onClick={() => {
                    navigate("/resources/Corporate");
                    handleLink("Corporates");
                  }}
                >
                  Corporates
                </li>
              </ul>
            )}
          </li>
          <li
            onClick={() => {
              navigate("/contact");
              handleLink("contact us");
            }}
            className={`py-[10px] px-[15px] w-[full] h-[43px] cursor-pointer flex align-middle hover:font-bold  ${
              selectedLink === "contact us"
                ? "bg-[#900000] text-white rounded-[50px]"
                : ""
            }`}
          >
            Contact Us
          </li>
        </ul>
      </div>

      <div className="hidden md:flex justify-items-center align-middle ">
        <Button className=" h-[63px] p-[20px]">Access Self-Service</Button>
      </div>
      <RiMenuLine size={20} className="md:hidden" />
    </div>
  );
};

export default MenuNavigation;
