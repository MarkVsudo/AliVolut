/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import '../../../App.css';
import '../../../styles/Accounts.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Modal, Button, Select, MenuItem, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import USAflag from '../../../assets/USA-flag.svg';
import EURflag from '../../../assets/euro-flag.png';
import GBflag from '../../../assets/GB-flag.svg';
import googleIcon from '../../../assets/google-icon.png';
import appleIcon from '../../../assets/apple-icon.png';

const Accounts = () => {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isAddAccountModalOpen, setIsAddAccountModalOpen] = useState(false);
  const [transferNonce, setTransferNonce] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [transferUserId, setTransferUserId] = useState('');
  const [transferCurrency, setTransferCurrency] = useState('USD');
  const [depositAmount, setDepositAmount] = useState('');
  const [depositCurrency, setDepositCurrency] = useState('USD');
  const [depositNonce, setDepositNonce] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawCurrency, setWithdrawCurrency] = useState('USD');
  const [withdrawNonce, setWithdrawNonce] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [accType, setAccType] = useState('');
  const [accCurr, setAccCurr] = useState('USD');
  const [accAmount, setAccAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState(2000);

  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          'https://api.exchangerate-api.com/v4/latest/USD'
        );
        setExchangeRates(response.data.rates);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  const handleTransferClick = () => {
    setIsTransferModalOpen(true);
  };

  const handleTransferModalClose = () => {
    setIsTransferModalOpen(false);
  };

  const handleTransfer = () => {
    const transferAmountValue = parseFloat(transferAmount);
    const selectedCurrency = transferCurrency;

    // Convert the transfer amount to USD
    let usdAmount = transferAmountValue;
    if (selectedCurrency === 'EUR') {
      usdAmount = transferAmountValue / exchangeRates.EUR;
    } else if (selectedCurrency === 'GBP') {
      usdAmount = transferAmountValue / exchangeRates.GBP;
    }

    if (usdAmount <= totalAmount) {
      const remainingAmount = totalAmount - usdAmount;
      setTotalAmount(remainingAmount);
      setIsTransferModalOpen(false);
    } else {
      alert('Insufficient balance for transfer');
    }
  };

  const handleDepositClick = () => {
    setIsDepositModalOpen(true);
  };

  const handleDepositModalClose = () => {
    setIsDepositModalOpen(false);
  };

  const handleDeposit = () => {
    const depositAmountValue = parseFloat(depositAmount);
    const selectedCurrency = depositCurrency;

    // Convert the deposit amount to USD
    let usdAmount = depositAmountValue;
    if (selectedCurrency === 'EUR') {
      usdAmount = depositAmountValue / exchangeRates.EUR;
    } else if (selectedCurrency === 'GBP') {
      usdAmount = depositAmountValue / exchangeRates.GBP;
    }

    const newTotalAmount = totalAmount + usdAmount;
    setTotalAmount(newTotalAmount);
    setIsDepositModalOpen(false);
  };

  const handleWithdrawClick = () => {
    setIsWithdrawModalOpen(true);
  };

  const handleWithdrawModalClose = () => {
    setIsWithdrawModalOpen(false);
  };

  const handleWithdraw = () => {
    const withdrawAmountValue = parseFloat(withdrawAmount);
    const selectedCurrency = withdrawCurrency;

    // Convert the withdrawal amount to USD
    let usdAmount = withdrawAmountValue;
    if (selectedCurrency === 'EUR') {
      usdAmount = withdrawAmountValue / exchangeRates.EUR;
    } else if (selectedCurrency === 'GBP') {
      usdAmount = withdrawAmountValue / exchangeRates.GBP;
    }

    if (usdAmount <= totalAmount) {
      const newTotalAmount = totalAmount - usdAmount;
      setTotalAmount(newTotalAmount);
      setIsWithdrawModalOpen(false);
    } else {
      alert('Insufficient balance for withdrawal');
    }
  };

  const handleCreateAccount = () => {
    const newAccount = {
      type: accType,
      currency: accCurr,
      amount: accAmount
    };
    const amount = parseFloat(accAmount);
    if (!Number.isNaN(amount) && amount <= totalAmount) {
      setAccounts([...accounts, newAccount]);
      setTotalAmount(totalAmount - amount);
      setAccType('');
      setAccCurr('USD');
      setAccAmount('');
      setIsAddAccountModalOpen(false);
    } else {
      setIsAddAccountModalOpen(false);
      alert('Insufficient balance for creating a new account');
    }
  };

  const handleAddAccountClick = () => {
    setIsAddAccountModalOpen(true);
  };

  const handleAddAccountModalClose = () => {
    setIsAddAccountModalOpen(false);
  };

  const handleAccTypeChange = (event) => {
    setAccType(event.target.value);
  };

  const handleAccCurrChange = (event) => {
    setAccCurr(event.target.value);
  };

  const handleAccAmountChange = (event) => {
    setAccAmount(event.target.value);
  };

  return (
    <div className="account-block">
      <div className="account-head">
        <div className="amount-plus-curr">
          <span className="amount-main-acc">&#36;{totalAmount.toFixed(2)}</span>
          <div className="currency">
            <img src={USAflag} alt="USA flag" />
            <span>Total balance in {transferCurrency}</span>
          </div>
        </div>
        <div className="account-options">
          <button
            className="transfer-button-head"
            onClick={handleTransferClick}
          >
            <SendIcon className="button-icons" />
          </button>
          <button className="deposit-button-head" onClick={handleDepositClick}>
            <AddIcon className="button-icons" />
          </button>
          <button
            className="withdraw-button-head"
            onClick={handleWithdrawClick}
          >
            <AccountBalanceIcon className="button-icons" />
          </button>
        </div>
      </div>
      <div className="line" />
      <div className="account-main">
        <div className="account-titles">
          <span className="acc-title">All accounts</span>
          <button className="add-acc-button" onClick={handleAddAccountClick}>
            Add new account
          </button>{' '}
        </div>
        <div className="container-separate-blocks">
          {accounts.map((account, index) => (
            <div className="separate-acc-block" key={index}>
              <div className="acc-description">
                <span className="acc-type">{account.type}</span>
                <span className="acc-curr">{account.currency}</span>
                <span className="acc-amount">
                  {account.currency === 'USD' && <span>&#36;</span>}
                  {account.currency === 'EUR' && <span>&#8364;</span>}
                  {account.currency === 'GBP' && <span>&#163;</span>}
                  {account.amount}
                </span>
              </div>
              {account.currency === 'USD' && (
                <img className="acc-flag" src={USAflag} alt="USA flag" />
              )}
              {account.currency === 'EUR' && (
                <img className="acc-flag" src={EURflag} alt="EUR flag" />
              )}
              {account.currency === 'GBP' && (
                <img className="acc-flag" src={GBflag} alt="GBP flag" />
              )}
            </div>
          ))}
        </div>
      </div>

      <Modal open={isTransferModalOpen} onClose={handleTransferModalClose}>
        <div className="modal-account">
          <div className="modal-content">
            <h2>Transfer Information</h2>
            <TextField
              label="Nonce"
              value={transferNonce}
              onChange={(e) => setTransferNonce(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Amount"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Select
              value={transferCurrency}
              onChange={(e) => setTransferCurrency(e.target.value)}
              fullWidth
              margin="normal"
            >
              <MenuItem value="USD">&#36; USD</MenuItem>
              <MenuItem value="EUR">&#8364; EUR</MenuItem>
              <MenuItem value="GBP">&#163; GBP</MenuItem>
            </Select>
            <TextField
              label="User ID"
              value={transferUserId}
              onChange={(e) => setTransferUserId(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button
              onClick={handleTransfer}
              variant="contained"
              className="transfer-button"
            >
              Transfer
            </Button>
          </div>
        </div>
      </Modal>

      <Modal open={isDepositModalOpen} onClose={handleDepositModalClose}>
        <div className="modal-account">
          <div className="modal-content">
            <h2>Deposit Information</h2>
            <TextField
              label="Nonce"
              value={depositNonce}
              onChange={(e) => setDepositNonce(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Amount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Select
              value={depositCurrency}
              onChange={(e) => setDepositCurrency(e.target.value)}
              fullWidth
              margin="normal"
            >
              <MenuItem value="USD">&#36; USD</MenuItem>
              <MenuItem value="EUR">&#8364; EUR</MenuItem>
              <MenuItem value="GBP">&#163; GBP</MenuItem>
            </Select>
            <div className="payment-providers">
              <h3>Select Payment Provider:</h3>
              <div className="container-deposit-buttons">
                <div className="google-apple-pay">
                  <Button
                    variant="contained"
                    onClick={handleDeposit}
                    className="deposit-button"
                  >
                    <img src={googleIcon} className="payment-icon-google" />
                    Google Pay
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleDeposit}
                    className="deposit-button"
                  >
                    <img src={appleIcon} className="payment-icon-apple" />
                    Apple Pay
                  </Button>
                </div>
                <Button
                  variant="contained"
                  onClick={handleDeposit}
                  className="deposit-button internet-deposit"
                >
                  <RssFeedIcon className="payment-icon-internet" />
                  Internet Provider Pay
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal open={isWithdrawModalOpen} onClose={handleWithdrawModalClose}>
        <div className="modal-account">
          <div className="modal-content">
            <h2>Withdrawal Information</h2>
            <TextField
              label="Nonce"
              value={withdrawNonce}
              onChange={(e) => setWithdrawNonce(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Security Code"
              type="password"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Amount"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Select
              value={withdrawCurrency}
              onChange={(e) => setWithdrawCurrency(e.target.value)}
              fullWidth
              margin="normal"
            >
              <MenuItem value="USD">&#36; USD</MenuItem>
              <MenuItem value="EUR">&#8364; EUR</MenuItem>
              <MenuItem value="GBP">&#163; GBP</MenuItem>
            </Select>
            <Button
              onClick={handleWithdraw}
              variant="contained"
              className="withdraw-button"
            >
              Withdraw
            </Button>
          </div>
        </div>
      </Modal>

      <Modal open={isAddAccountModalOpen} onClose={handleAddAccountModalClose}>
        <div className="modal-account">
          <div className="modal-content">
            <h2>Create New Account</h2>
            <TextField
              label="Account Type"
              value={accType}
              onChange={handleAccTypeChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Account Amount"
              value={accAmount}
              onChange={handleAccAmountChange}
              fullWidth
              margin="normal"
            />
            <Select
              value={accCurr}
              onChange={handleAccCurrChange}
              fullWidth
              margin="normal"
            >
              <MenuItem value="USD">&#36; USD</MenuItem>
              <MenuItem value="EUR">&#8364; EUR</MenuItem>
              <MenuItem value="GBP">&#163; GBP</MenuItem>
            </Select>
            <Button
              onClick={handleCreateAccount}
              variant="contained"
              className="create-acc-button"
            >
              Create Account
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Accounts;
