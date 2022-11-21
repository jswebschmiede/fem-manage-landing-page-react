import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="site-header py-16">
      <div className="container flex items-center justify-between">
        <a href="#">
          <img src={Logo} alt="Manage" />
        </a>
        <nav className="hidden lg:block" aria-label="Primary">
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
        <button className="button bg-managebrightred text-white">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
