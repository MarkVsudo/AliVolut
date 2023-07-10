/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import '../../../App.css';
import '../../../styles/Accounts.css';

import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import USAflag from '../../../assets/USA-flag.svg';

const Accounts = () => {
  return (
    <div className="account-block">
      <div className="account-head">
        {' '}
        <div className="amount-plus-curr">
          <span className="amount-main-acc"> $2000.00</span>{' '}
          <div className="currency">
            <img src={USAflag} /> <span>Total balance in USD</span>{' '}
          </div>
        </div>
        <div className="account-options">
          <button className="transfer-button">
            <ChevronRightIcon />
          </button>
          <button className="deposit-button">
            <AddIcon />
          </button>
        </div>
      </div>
      <div className="line" />
      <div className="account-main">
        <div className="account-titles">
          <span className="acc-title">All accounts</span>
          <button className="add-acc-button">Add new account</button>
        </div>
        <div className="separate-acc-block">
          <div className="separate-acc">
            <div className="acc-description">
              <span className="acc-type">Travel account</span>
              <span className="acc-curr">USD</span>
              <span className="acc-amount">$180</span>
            </div>
            <img className="acc-flag" src={USAflag} />
          </div>
        </div>
        <div className="separate-acc-block">
          <div className="separate-acc">
            <div className="acc-description">
              <span className="acc-type">Travel account</span>
              <span className="acc-curr">USD</span>
              <span className="acc-amount">$180</span>
            </div>
            <img className="acc-flag" src={USAflag} />
          </div>
        </div>
        <div className="separate-acc-block">
          <div className="separate-acc">
            <div className="acc-description">
              <span className="acc-type">Travel account</span>
              <span className="acc-curr">USD</span>
              <span className="acc-amount">$180</span>
            </div>
            <img className="acc-flag" src={USAflag} />
          </div>
        </div>
        <div className="separate-acc-block">
          <div className="separate-acc">
            <div className="acc-description">
              <span className="acc-type">Travel account</span>
              <span className="acc-curr">USD</span>
              <span className="acc-amount">$180</span>
            </div>
            <img className="acc-flag" src={USAflag} />
          </div>
        </div>
        <div className="separate-acc-block">
          <div className="separate-acc">
            <div className="acc-description">
              <span className="acc-type">Travel account</span>
              <span className="acc-curr">USD</span>
              <span className="acc-amount">$180</span>
            </div>
            <img className="acc-flag" src={USAflag} />
          </div>
        </div>
        <div className="separate-acc-block">
          <div className="separate-acc">
            <div className="acc-description">
              <span className="acc-type">Travel account</span>
              <span className="acc-curr">USD</span>
              <span className="acc-amount">$180</span>
            </div>
            <img className="acc-flag" src={USAflag} />
          </div>
        </div>
        <div className="separate-acc-block">
          <div className="separate-acc">
            <div className="acc-description">
              <span className="acc-type">Travel account</span>
              <span className="acc-curr">USD</span>
              <span className="acc-amount">$180</span>
            </div>
            <img className="acc-flag" src={USAflag} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
