/* eslint-disable import/no-extraneous-dependencies */
import Button from '@mui/material/Button';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const StartTransferringButton = () => {
  return (
    <Button
      className="mainBtn"
      variant="contained"
      color="primary"
      startIcon={<CreditCardIcon />}
    >
      Start Transferring
    </Button>
  );
};

export default StartTransferringButton;
