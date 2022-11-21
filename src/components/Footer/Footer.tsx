import FooterLogo from "../../assets/logo-footer.svg";
import FacebookIcon from "../../assets/icon-facebook.svg";
import YoutubeIcon from "../../assets/icon-youtube.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";
import PinterestIcon from "../../assets/icon-pinterest.svg";
import InstagramIcon from "../../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="site-footer bg-managedarkblue100 py-16 text-white">
      <div className="container">
        <div className="grid gap-6 md:auto-cols-fr md:grid-flow-col">
          <div className="mb-4 flex max-w-xs flex-col justify-between lg:mb-0">
            <a href="#">
              <img src={FooterLogo} alt="Manage" />
            </a>
            <nav aria-label="Social">
              <ul className="flex space-x-4" role="list">
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={FacebookIcon} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={YoutubeIcon} alt="youtube" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={TwitterIcon} alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={PinterestIcon} alt="pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={InstagramIcon} alt="instagram" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <nav aria-label="Footer">
              <ul className="columns-1 space-y-2 md:columns-2" role="list">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col justify-between">
            <form action="#">
              <input type="email" name="email" id="email" required />
              <button className="button" type="submit">
                Go
              </button>
            </form>

            <div>
              <p>Copyright 2020. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
