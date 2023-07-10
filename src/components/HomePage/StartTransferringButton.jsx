/* eslint-disable import/no-extraneous-dependencies */
import '../../App.css';
import '../../styles/StartTransferringButton.css';
import Button from '@mui/material/Button';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const StartTransferringButton = () => {
  return (
    <Button
      className="main-btn"
      variant="contained"
      color="primary"
      startIcon={<CreditCardIcon />}
    >
      Start Transferring
    </Button>
  );
};

export default StartTransferringButton;
