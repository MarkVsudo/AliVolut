/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../App.css';
import whiteLogo from '../../assets/Alivolut-white.png';
import fbLogo from '../../assets/fbLogo.png';
import twLogo from '../../assets/twLogo.png';
import instaLogo from '../../assets/instaLogo.png';
import bgLogo from '../../assets/bgLogo.png';

const Footer = () => {
  return (
    <footer>
      <div className="textFooter">
        <div className="col1">
          <h6>Main</h6>
          <a>Transactions</a>
          <a>Exchange</a>
          <a>Subscriptions</a>
          <a>Cards</a>
        </div>
        <div className="col2">
          <h6>Subscription Plans</h6>
          <a>Standard</a>
          <a>Premium</a>
          <a>Elite</a>
        </div>
        <div className="col3">
          <h6>Organization</h6>
          <a>About Us</a>
          <a>Contacts</a>
        </div>
        <div className="col4">
          <h6>Policies</h6>
          <a>Terms & Conditions</a>
          <a>Rights</a>
        </div>
      </div>
      <div className="socialFooter">
        <div className="footerLogos">
          <a href='#' className='anchorAli'>
          < img src={whiteLogo} className="aliLogoWhite" />
          </a>
          <div className="socialLogosBlock">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={fbLogo} className="socialLogos" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img src={twLogo} className="socialLogos" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instaLogo} className="socialLogos" />
            </a>
          </div>
        </div>
        <div className="line" />
        <div className="bgFooter">
            <img src={bgLogo} />
          <span>Bulgaria</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
