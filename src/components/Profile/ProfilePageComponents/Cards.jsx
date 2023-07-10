/* eslint-disable jsx-a11y/alt-text */
import '../../../App.css';
import '../../../styles/ProfileCards.css';
import stFrontCard from '../../../assets/front-card-1.png';
import ndFrontCard from '../../../assets/front-card-2.png';
import rdFrontCard from '../../../assets/front-card-3.png';
import thFrontCard from '../../../assets/front-card-4.png';
import stBackCard from '../../../assets/back-card-1.png';
import ndBackCard from '../../../assets/back-card-2.png';
import rdBackCard from '../../../assets/back-card-3.png';
import thBackCard from '../../../assets/back-card-4.png';

const Cards = () => {
  return (
    <div className="cards-block">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={stFrontCard} alt="Front Card" />
          </div>
          <div className="card-back">
            <img src={stBackCard} alt="Back Card" />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={ndFrontCard} alt="Front Card" />
          </div>
          <div className="card-back">
            <img src={ndBackCard} alt="Back Card" />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={rdFrontCard} alt="Front Card" />
          </div>
          <div className="card-back">
            <img src={rdBackCard} alt="Back Card" />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={thFrontCard} alt="Front Card" />
          </div>
          <div className="card-back">
            <img src={thBackCard} alt="Back Card" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
