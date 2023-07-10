/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../../App.css';
import '../../../styles/Footer.css';
import whiteLogo from '../../../assets/Alivolut-white.png';
import fbLogo from '../../../assets/fbLogo.png';
import twLogo from '../../../assets/twLogo.png';
import instaLogo from '../../../assets/instaLogo.png';
import bgLogo from '../../../assets/bgLogo.png';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="text-footer">
          <div className="col">
            <h6>Main</h6>
            <a>Transactions</a>
            <a>Exchange</a>
            <a>Subscriptions</a>
            <a>Cards</a>
          </div>
          <div className="col">
            <h6>Subscription Plans</h6>
            <a>Standard</a>
            <a>Premium</a>
            <a>Elite</a>
          </div>
          <div className="col">
            <h6>Organization</h6>
            <a>About Us</a>
            <a>Contacts</a>
          </div>
          <div className="col">
            <h6>Policies</h6>
            <a>Terms & Conditions</a>
            <a>Rights</a>
          </div>
        </div>
        <div className="social-footer">
          <div className="footer-logos">
            <a href="#" className="anchor-ali">
              <img src={whiteLogo} className="ali-logo-white" />
            </a>
            <div className="social-logos-block">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fbLogo} className="social-logos" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twLogo} className="social-logos" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instaLogo} className="social-logos" />
              </a>
            </div>
          </div>
          <div className="line" />
          <div className="bg-footer">
            <img src={bgLogo} />
            <span>Bulgaria</span>
          </div>
        </div>
      </footer>
      <div className="copyright">
        Copyright © 2023 AliVolut - All rights reserved
      </div>
    </>
  );
};

export default Footer;
