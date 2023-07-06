/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import '../../App.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import earth from '../../assets/earth.png';
import vault from '../../assets/vault.png';
import stock1 from '../../assets/stock1.png';
import stock2 from '../../assets/stock2.png';

const CardsSection = () => {
  return (
    <div className="cardsSection" id="cards">
      <div className="cardsTitles">
        <h5>Your daily needs</h5>
        <h2>
          Send, spend and save <br />
          smarter
        </h2>
        <h4>
          Meet everyday expenses with ease by putting everything related to{' '}
          <br /> money in one place
        </h4>
      </div>
      <div className="cardsGrid">
        <div className="card-1">
          <div>
            <h2>
              Send and receive <br /> payments seamlessly
            </h2>
            <h4>
              Send and claim money with one tap, <br /> seamlessly share
              accounts with anyone <br /> in over 200 countries
            </h4>
            <a>
              Discover easy payments <ChevronRightIcon className="rightArrow" />
            </a>
          </div>
          <img src={earth} className="earth" />
        </div>
        <div className="card2n3">
          <div className="card-2">
            <h2>
              Set aside money <br /> effortlessly
            </h2>
            <img src={vault} />
            <a>
              Safes <ChevronRightIcon className="rightArrow" />
            </a>
          </div>
          <div className="card-3">
            <h2>
              No more <br /> unwanted <br /> subscriptions
            </h2>
            <div>
              <img src={stock1} />
              <img src={stock2} />
            </div>
            <a>
              View Subscription <ChevronRightIcon className="rightArrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
