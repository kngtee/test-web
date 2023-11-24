import { useState } from "react";
import claLogo from "../assets/images/cla-logo.png";
import { Button } from "../components/ui/button";

const MenuNavigation = () => {
  const [submenu, setSubmenu] = useState<any>(false);
  const [submenu2, setSubmenu2] = useState<any>(false);

  const toggleMenu = () => {
    setSubmenu(!submenu);
  };

  const toggleMenu2 = () => {
    setSubmenu2(!submenu2);
  };

  return (
      <div className="flex flex-row items-center justify-between py-8 bg-[#FBF9F9] px-10">
        <div className="flex justify-center">
          <img src={claLogo} alt="logo" className=" h-[65.5px]" />
        </div>
        <div className="flex  rounded-3xl  bg-[white] drop-shadow-xl ">
          <ul className="flex flex-row mt-2 ">
            <li className="p-4 w-[full] cursor-pointer hover:font-bold hover:text-[#900000] flex align-middle">
              Home
            </li>
            <li className="p-4 w-[full] cursor-pointer flex align-middle hover:font-bold hover:text-[#900000]">
              About Us
            </li>
            <li
              onClick={toggleMenu}
              className="p-4 relative cursor-pointer   w-[full] flex hover:font-bold hover:text-[#900000]"
            >
              Products
              {submenu && (
                <ul className="absolute left-0 mt-10 bg-white border rounded shadow-md w-[200px]">
                  <li className=" py-2 pl-2">Savings and Investment</li>
                  <li className=" py-2 pl-2">Protection Policies</li>
                  <li className=" py-2 pl-2">Endowment Policies</li>
                  <li className=" py-2 pl-2">Annuities</li>
                  <li className=" py-2 pl-2">Corporate</li>
                </ul>
              )}
            </li>
            <li className="p-4 w-[full] cursor-pointer flex align-middle hover:font-bold hover:text-[#900000]">
              Media
            </li>
            <li className="p-4 w-[full] cursor-pointer flex align-middle hover:font-bold hover:text-[#900000]">
              Make a Claim
            </li>
            <li
              onClick={toggleMenu2}
              className="p-4 relative w-[full] cursor-pointer flex align-middle hover:font-bold hover:text-[#900000]"
            >
              Resources
              {submenu2 && (
                <ul className="absolute left-0 mt-10 bg-white border rounded shadow-md">
                  <li className="p-2">FAQs</li>
                  <li className="p-2">Finacials</li>
                  <li className="p-2">Downloads</li>
                  <li className="p-2">Corporates</li>
                </ul>
              )}
            </li>
            <li className="p-4 w-[full] cursor-pointer flex align-middle hover:font-bold hover:text-[#900000]">
              Contact Us
            </li>
          </ul>
        </div>

        <div className="flex justify-items-center align-middle m-3">
          <Button>Access Self-Service</Button>
        </div>
      </div>
  );
};

export default MenuNavigation;
