import '../../../App.css';

import { useState } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Modal,
  Switch,
  Divider,
  Button,
  Select,
  MenuItem
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import LockIcon from '@mui/icons-material/Lock';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SettingsPage = () => {
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);
  const [isDocumentUploaded, setIsDocumentUploaded] = useState(false);
  const [documentType, setDocumentType] = useState('');

  const handleSecurityModalOpen = () => {
    setIsSecurityModalOpen(true);
  };

  const handleSecurityModalClose = () => {
    setIsSecurityModalOpen(false);
  };

  const handleDocumentUpload = () => {
    setIsDocumentUploaded(true);
  };

  const handleDocumentTypeChange = (event) => {
    setDocumentType(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Settings
      </Typography>
      <List>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="General Settings" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Information" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary="Language Preferences" />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleSecurityModalOpen}>
          <ListItemIcon>
            <LockIcon />
          </ListItemIcon>
          <ListItemText primary="Security Settings" />
          {isDocumentUploaded && (
            <ListItemIcon>
              <CheckCircleIcon style={{ color: 'green' }} />
            </ListItemIcon>
          )}
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary="Payment Methods" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notification Settings" />
          <Switch />
        </ListItem>
        <Divider />
      </List>
      <Modal
        open={isSecurityModalOpen}
        onClose={handleSecurityModalClose}
        aria-labelledby="security-modal-title"
        aria-describedby="security-modal-description"
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            backgroundColor: 'white',
            padding: '20px'
          }}
        >
          <Typography variant="h6" id="security-modal-title" gutterBottom>
            Upload Identification Document
          </Typography>
          {!isDocumentUploaded ? (
            <>
              <Typography
                variant="body1"
                id="security-modal-description"
                gutterBottom
              >
                Please select the document type and upload a valid ID card or
                passport.
              </Typography>
              <Select
                value={documentType}
                onChange={handleDocumentTypeChange}
                displayEmpty
                style={{ marginBottom: '20px' }}
              >
                <MenuItem value="" disabled>
                  Select a document
                </MenuItem>
                <MenuItem value="ID card">ID card</MenuItem>
                <MenuItem value="Passport">Passport</MenuItem>
              </Select>
              <Button
                variant="contained"
                component="label"
                startIcon={<PhotoCameraIcon />}
                disabled={!documentType}
              >
                Browse Images
                <input
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleDocumentUpload}
                />
              </Button>
            </>
          ) : (
            <>
              <Typography variant="body1" gutterBottom>
                Document Uploaded Successfully
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSecurityModalClose}
              >
                Close
              </Button>
            </>
          )}
        </div>
      </Modal>
    </Container>
  );
};

export default SettingsPage;
