/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import '../../../App.css';
import '../../../styles/Accounts.css';

import { useState } from 'react';
import { Modal, Button, Select, MenuItem, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import USAflag from '../../../assets/USA-flag.svg';

const Accounts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nonce, setNonce] = useState('');
  const [amount, setAmount] = useState('');
  const [userId, setUserId] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [totalAmount, setTotalAmount] = useState(2000);

  const handleTransferClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleTransfer = () => {
    // Deduct transferred amount from the total amount
    const remainingAmount = totalAmount - parseFloat(amount);
    setTotalAmount(remainingAmount);

    // Perform transfer logic using nonce, amount, userId, and currency
    console.log('Transfer:', nonce, amount, userId, currency);

    // Close the modal after transfer
    setIsModalOpen(false);
  };

  return (
    <div className="account-block">
      <div className="account-head">
        <div className="amount-plus-curr">
          <span className="amount-main-acc">${totalAmount.toFixed(2)}</span>
          <div className="currency">
            <img src={USAflag} alt="USA flag" />
            <span>Total balance in {currency}</span>
          </div>
        </div>
        <div className="account-options">
          <button
            className="transfer-button-head"
            onClick={handleTransferClick}
          >
            <SendIcon className="button-icons" />
          </button>
          <button className="deposit-button-head">
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

      <Modal open={isModalOpen} onClose={handleModalClose}>
        <div className="modal-account">
          <div className="modal-content">
            <h2>Transfer Information</h2>
            <TextField
              label="Nonce"
              value={nonce}
              onChange={(e) => setNonce(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              fullWidth
              margin="normal"
            >
              <MenuItem value="USD">$ USD</MenuItem>
              <MenuItem value="EUR">€ EUR</MenuItem>
              <MenuItem value="GBP">£ GBP</MenuItem>
            </Select>
            <TextField
              label="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button
              onClick={handleTransfer}
              variant="contained"
              color="primary"
            >
              Transfer
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Accounts;
