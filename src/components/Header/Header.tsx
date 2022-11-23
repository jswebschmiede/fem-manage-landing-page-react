import { useState } from "react";
import Logo from "../../assets/logo.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMobilMenuHandler = () => {
    setOpen(!open);
  };

  return (
    <header role="banner" className="site-header py-16">
      <div className="container flex items-center justify-between">
        <a href="#">
          <img src={Logo} alt="Manage" />
        </a>
        <nav className="hidden lg:block" aria-label="Primary" role="navigation">
          <ul className="flex space-x-8" role="list">
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

        <button
          onClick={toggleMobilMenuHandler}
          className="relative -mt-2 flex h-10 w-10 items-center justify-center focus:outline-none md:hidden"
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
      </div>
    </header>
  );
};

export default Header;
