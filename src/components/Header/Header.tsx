import { useState } from "react";
import Logo from "../../assets/logo.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMobilMenuHandler = () => {
    setOpen(!open);
  };

  return (
    <header role="banner" className="site-header py-16">
      {open && (
        <div
          className={`fixed top-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-black lg:hidden ${
            open ? `block` : `hidden`
          }`}
          aria-hidden="true"
          onClick={toggleMobilMenuHandler}
        ></div>
      )}
      <div className="container flex items-center justify-between">
        <a href="#">
          <img src={Logo} alt="Manage" />
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={open ? "true" : "false"}
          aria-hidden="true"
          onClick={toggleMobilMenuHandler}
          className="relative z-20 -mt-2 flex h-10 w-10 items-center justify-center focus:outline-none md:hidden"
        >
          <div className="flex w-6 transform items-center justify-center">
            <span
              className={`text-mabg-managedarkblue400 absolute block h-1 w-7 transform bg-managedarkblue400 transition duration-500 ease-in-out ${
                open ? `rotate-45` : `-translate-y-2`
              }`}
            ></span>
            <span
              className={`text-mabg-managedarkblue400 absolute block h-1 w-7 transform bg-managedarkblue400 transition duration-500 ease-in-out ${
                open ? `opacity-0` : `opacity-100`
              }`}
            ></span>
            <span
              className={`text-mabg-managedarkblue400 absolute block h-1 w-7 transform bg-managedarkblue400 transition duration-500 ease-in-out ${
                open ? `-rotate-45` : `translate-y-2`
              }`}
            ></span>
          </div>
        </button>

        <nav
          id="primary-navigation"
          className={`fixed top-[15%] z-20 w-[calc(100%_-_2.90rem)] shadow-[0_0_0.75em_rgb(0,0,0,0.05)] lg:static lg:block lg:w-auto lg:shadow-none ${
            open ? `block` : `hidden`
          }`}
          aria-label="Primary"
          role="navigation"
        >
          <ul
            className="flex flex-col space-y-4 rounded-lg bg-white p-8 text-center font-semibold lg:flex-row lg:space-y-0 lg:space-x-8 lg:p-0 lg:text-left lg:font-normal"
            role="list"
          >
            <li>
              <a className="nav-link-primary" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="nav-link-primary" href="#">
                Product
              </a>
            </li>
            <li>
              <a className="nav-link-primary" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="nav-link-primary" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="nav-link-primary" href="#">
                Community
              </a>
            </li>
          </ul>
        </nav>
        <button className="button hidden bg-managebrightred text-white lg:block">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
