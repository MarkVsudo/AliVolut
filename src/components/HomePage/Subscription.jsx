/* eslint-disable import/no-extraneous-dependencies */
import '../../App.css';
import DoneIcon from '@mui/icons-material/Done';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Subscription = () => {
  return (
    <div className="subscriptionSection">
      <h2>Check out our tempting plans</h2>
      <div className="subscriptionCards">
        <div className="sb-card-1">
          <h4 className="typePlan">Standard</h4>
          <h5 className="pricePlan">$ 10 / Month</h5>
          <li>
            <DoneIcon className="sb-tick" /> Spend in over 150 currencies at the
            interbank exchange rate
          </li>
          <li>
            <DoneIcon className="sb-tick" />
            No cost ATM withdrawals up to US$6500 per month with no hidden fees
          </li>
          <li>
            <DoneIcon className="sb-tick" /> Earn 0.25% APY on your savings
          </li>
          <li>
            <DoneIcon className="sb-tick" /> Instant access to 2
            cryptocurrencies
          </li>
          <li>
            <DoneIcon className="sb-tick" /> Free Alivolut card
          </li>
          <li>
            <DoneIcon className="sb-tick" /> Alivolut Junior account for 1 kid
          </li>
          <button type="submit" className="btnSubscription">
            Subscribe <AccountBalanceWalletIcon />
          </button>
        </div>
        <div className="sb-card-2">
          <h4 className="typePlan">Premium</h4>
          <h5 className="pricePlan">$ 16 / Month</h5>
          <li>
            <DoneIcon className="sb-tick" /> Spend in over 150 currencies at the
            interbank exchange rate
          </li>
          <li>
            <DoneIcon className="sb-tick" />
            No cost ATM withdrawals up to US$6500 per month with no hidden fees
          </li>
          <li>
            <DoneIcon className="sb-tick" /> Overseas medical insurance
          </li>
          <li>
            <DoneIcon className="sb-tick" /> Earn 0.50% APY on your savings
          </li>
          <li>
            <DoneIcon className="sb-tick" /> Premium card with exclusive designs
          </li>
          <li>
            <DoneIcon className="sb-tick" /> Global express delivery
          </li>
          <button type="submit" className="btnSubscription">
            Subscribe <AccountBalanceWalletIcon />
          </button>
        </div>
        <div className="sb-card-3">
          <h4 className="typePlan">Elite</h4>
          <h5 className="pricePlan">$ 24 / Month</h5>
          <li>
            <DoneIcon className="sb-tick" /> Spend in over 150 currencies at the
            interbank exchange rate
          </li>
          <li>
            <DoneIcon className="sb-tick" />
            Exchange in 28 fiat currencies - no monthly limit with no hidden
            fees
          </li>
          <li>
            <DoneIcon className="sb-tick" /> Priority customer support
          </li>
          <li>
            <DoneIcon className="sb-tick" /> Earn 0.50% APY on your savings
          </li>
          <li>
            <DoneIcon className="sb-tick" /> Premium card with exclusive designs
          </li>
          <li>
            <DoneIcon className="sb-tick" /> Overseas medical insurance
          </li>
          <button type="submit" className="btnSubscription">
            Subscribe <AccountBalanceWalletIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
