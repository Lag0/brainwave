import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../assets";
import { navigation } from "../data/index";
import Button from "./ui/Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const handleOpenNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-50 w-full border-b border-n-6 
        lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
      >
        <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
          <a className="block w-[12rem] xl:mr-8" href="#hero">
            <img src={brainwave} alt="Brainwave Logo" width={190} height={40} />
          </a>

          <nav
            className={`${openNavigation ? "flex" : "hidden"} fixed bottom-0 left-0 right-0 top-[5rem] bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent`}
          >
            <div className="relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`${item.onlyMobile ? "lg:hidden" : ""}  ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } 
                    relative block px-6 py-6 font-code text-2xl uppercase text-n-1 
                    transition-colors hover:text-color-1 md:py-8 lg:-mr-0.25 lg:text-xs 
                    lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <HamburgerMenu />
          </nav>

          <a
            href="#signup"
            className="button mr-8 hidden text-n-1/50 transition-colors hover:text-n-1 lg:block"
          >
            New Account
          </a>
          <Button className="hidden lg:flex" href="#login">
            Sign In
          </Button>
          <Button
            className="ml-auto lg:hidden"
            px="px-3"
            onClick={handleOpenNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
