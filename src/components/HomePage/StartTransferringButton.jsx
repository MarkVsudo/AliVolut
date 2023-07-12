import '../../App.css';
import '../../styles/StartTransferringButton.css';
import Button from '@mui/material/Button';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const StartTransferringButton = () => {
  const handleButtonClick = () => {
    window.location.href = '/profile';
  };

  return (
    <Button
      className="main-btn"
      variant="contained"
      color="primary"
      startIcon={<CreditCardIcon />}
      onClick={handleButtonClick}
    >
      Start Transferring
    </Button>
  );
};

export default StartTransferringButton;
