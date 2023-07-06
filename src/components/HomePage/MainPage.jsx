/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/alt-text */
import '../../App.css';
import chair from '../../assets/chair.svg';
import hand from '../../assets/hand.svg';
import love from '../../assets/love.svg';
import plane from '../../assets/plane.svg';
import house from '../../assets/house.png';
import shoppingBag from '../../assets/shoping_bag.svg';
import transaction from '../../assets/transaction.svg';
import debitCard from '../../assets/debit_cards.png';
import gift from '../../assets/gift.svg';
import palms from '../../assets/palms.svg';

const MainPage = () => {
  return (
    <div className="heroSection">
      <h1 className="mainText">
        Best App For Managing <br></br>Your Funds!
      </h1>
      <h5 className="secondaryText">
        Shop with pleasure and spend your money sparingly.
      </h5>
      <div className="mainIcons">
        <div className="mainIcon-1">
          <img src={chair} />
        </div>
        <div className="mainIcon-2">
          <img src={hand}></img>
        </div>
        <div className="mainIcon-3">
          <img src={love}></img>
        </div>
        <div className="mainIcon-4">
          <img src={plane}></img>
        </div>
        <div className="mainIcon-5">
          <img src={house}></img>
        </div>
        <div className="mainIcon-6">
          <img src={shoppingBag}></img>
        </div>
        <div className="mainIcon-7">
          <img src={transaction}></img>
        </div>
        <div className="mainIcon-8">
          <img src={hand}></img>
        </div>
        <div className="mainIcon-9">
          <img src={debitCard}></img>
        </div>
        <div className="mainIcon-10">
          <img src={gift}></img>
        </div>
        <div className="mainIcon-11">
          <img src={palms}></img>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
