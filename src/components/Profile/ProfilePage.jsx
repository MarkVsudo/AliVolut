/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import '../../App.css';
import '../../styles/ProfilePage.css';
import Avatar from '@mui/material/Avatar';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SettingsIcon from '@mui/icons-material/Settings';
import StyleIcon from '@mui/icons-material/Style';
import LogoutIcon from '@mui/icons-material/Logout';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import AppBarNotMainPage from '../shared/HeaderNotMainPage/AppBarNotMainPage';
import { viravaDefault } from '../../config/authConfig';
import PersonalInformation from './ProfilePageComponents/PersonalInformation';
import Accounts from './ProfilePageComponents/Accounts';
import Cards from './ProfilePageComponents/Cards';
import Settings from './ProfilePageComponents/Settings';
import Transactions from './ProfilePageComponents/Transactions';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('accounts');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [profileName, setProfileName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [editedProfileName, setEditedProfileName] = useState('');

  // Load profile data from local storage on component mount
  useEffect(() => {
    const storedProfileName = localStorage.getItem('profileName');
    const storedProfileImage = localStorage.getItem('profileImage');
    if (storedProfileName && storedProfileImage) {
      setProfileName(storedProfileName);
      setProfileImage(storedProfileImage);
    }
  }, []);

  // Save profile data to local storage on change
  useEffect(() => {
    localStorage.setItem('profileName', profileName);
    localStorage.setItem('profileImage', profileImage);
  }, [profileName, profileImage]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleEditButtonClick = () => {
    setIsEditModalOpen(true);
    setEditedProfileName(profileName);
  };

  const handleModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleSaveChanges = () => {
    setProfileName(editedProfileName);
    setIsEditModalOpen(false);
  };

  const handleProfileNameChange = (e) => {
    setEditedProfileName(e.target.value);
  };

  const handleProfileImageChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const renderMainSection = () => {
    switch (activeSection) {
      case 'accounts':
        return <Accounts />;
      case 'cards':
        return <Cards />;
      case 'transactions':
        return <Transactions />;
      case 'personal':
        return <PersonalInformation />;
      case 'settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <>
      <AppBarNotMainPage />
      <section className="profile-section">
        <aside className="profile-aside">
          <div className="user">
            <Avatar
              alt="Profile Avatar"
              src={profileImage}
              className="avatar-profile"
            />
            <div>
              <span className="profile-name">{profileName}</span>
              <button onClick={handleEditButtonClick}>Edit profile</button>
            </div>
          </div>

          <div className="line" />

          <div className="list-settings">
            <div className="list-setting-block">
              <RecentActorsIcon className="profile-icons" />
              <button onClick={() => handleSectionClick('accounts')}>
                Accounts
              </button>
            </div>
            <div className="list-setting-block">
              <StyleIcon className="profile-icons" />
              <button onClick={() => handleSectionClick('cards')}>Cards</button>
            </div>
            <div className="list-setting-block">
              <MultipleStopIcon className="profile-icons" />
              <button onClick={() => handleSectionClick('transactions')}>
                Transactions
              </button>
            </div>
            <div className="list-setting-block">
              <PersonSearchIcon className="profile-icons" />
              <button onClick={() => handleSectionClick('personal')}>
                Personal Information
              </button>
            </div>
            <div className="list-setting-block">
              <SettingsIcon className="profile-icons" />
              <button onClick={() => handleSectionClick('settings')}>
                Settings
              </button>
            </div>
            <div className="list-setting-block">
              <LogoutIcon className="profile-icons" />
              <button
                onClick={async () => {
                  try {
                    await viravaDefault.logout();
                  } catch (error) {
                    console.error(error);
                  }
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </aside>
        <main className="profile-main">{renderMainSection()}</main>
      </section>

      <Modal open={isEditModalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4
          }}
        >
          <Typography variant="h6" component="div" sx={{ mb: 2 }}>
            Edit Profile
          </Typography>
          <TextField
            label="Profile Name"
            value={editedProfileName}
            onChange={handleProfileNameChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageChange}
            style={{ marginBottom: '16px' }}
          />
          <Button variant="contained" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ProfilePage;
