/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import '../../../App.css';
import '../../../styles/Accounts.css';

import { useState } from 'react';
import { Modal, Button, Select, MenuItem, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import USAflag from '../../../assets/USA-flag.svg';
import googleIcon from '../../../assets/google-icon.png';
import appleIcon from '../../../assets/apple-icon.png';

const Accounts = () => {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [transferNonce, setTransferNonce] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [transferUserId, setTransferUserId] = useState('');
  const [transferCurrency, setTransferCurrency] = useState('USD');
  const [depositAmount, setDepositAmount] = useState('');
  const [depositCurrency, setDepositCurrency] = useState('USD');
  const [depositNonce, setDepositNonce] = useState('');
  const [totalAmount, setTotalAmount] = useState(2000);

  const handleTransferClick = () => {
    setIsTransferModalOpen(true);
  };

  const handleTransferModalClose = () => {
    setIsTransferModalOpen(false);
  };

  const handleTransfer = () => {
    const transferAmountValue = parseFloat(transferAmount);
    if (transferAmountValue <= totalAmount) {
      const remainingAmount = totalAmount - transferAmountValue;
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
    const newTotalAmount = totalAmount + depositAmountValue;
    setTotalAmount(newTotalAmount);
    setIsDepositModalOpen(false);
  };

  return (
    <div className="account-block">
      <div className="account-head">
        <div className="amount-plus-curr">
          <span className="amount-main-acc">${totalAmount.toFixed(2)}</span>
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
        </div>
      </div>
      <div className="line" />
      <div className="account-main">
        <div className="account-titles">
          <span className="acc-title">All accounts</span>
          <button className="add-acc-button">Add new account</button>
        </div>
        <div className="container-separate-blocks">
          <div className="separate-acc-block">
            <div className="acc-description">
              <span className="acc-type">Travel account</span>
              <span className="acc-curr">USD</span>
              <span className="acc-amount">$180</span>
            </div>
            <img className="acc-flag" src={USAflag} alt="USA flag" />
          </div>
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
              <MenuItem value="USD">$ USD</MenuItem>
              <MenuItem value="EUR">€ EUR</MenuItem>
              <MenuItem value="GBP">£ GBP</MenuItem>
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
              className='transfer-button'
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
              <MenuItem value="USD">$ USD</MenuItem>
              <MenuItem value="EUR">€ EUR</MenuItem>
              <MenuItem value="GBP">£ GBP</MenuItem>
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
    </div>
  );
};

export default Accounts;
