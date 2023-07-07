/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import '../../App.css';
import Avatar from '@mui/material/Avatar';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AppBarNotMainPage from '../shared/HeaderNotMainPage/AppBarNotMainPage';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SettingsIcon from '@mui/icons-material/Settings';
import StyleIcon from '@mui/icons-material/Style';
import LogoutIcon from '@mui/icons-material/Logout';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('accounts');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [profileName, setProfileName] = useState('');
  const [profileImage, setProfileImage] = useState('');
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
  };

  const handleModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleSaveChanges = () => {
    // Save the changes made in the modal
    setIsEditModalOpen(false);
  };

  const handleProfileNameChange = (e) => {
    setProfileName(e.target.value);
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
        return <div>Accounts Section</div>;
      case 'cards':
        return <div>Cards Section</div>;
      case 'personal':
        return <div>Personal Information Section</div>;
      case 'settings':
        return <div>Settings Section</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <AppBarNotMainPage />
      <section className="profileSection">
        <aside className="profileAside">
          <div className="user">
            <Avatar
              alt="Profile Avatar"
              src={profileImage}
              className="avatarProfile"
            />
            <div>
              <span className="profileName">{profileName}</span>
              <button onClick={handleEditButtonClick}>Edit profile</button>
            </div>
          </div>

          <div className="line" />

          <div className="listSettings">
            <div className="listSettingBlock">
              <button onClick={() => handleSectionClick('accounts')}>
                Accounts <RecentActorsIcon className="profileIcons" />
              </button>
              <div className="listSettingBlock">
                <button onClick={() => handleSectionClick('cards')}>
                  Cards <StyleIcon className="profileIcons" />
                </button>
              </div>
              <div className="listSettingBlock">
                <button onClick={() => handleSectionClick('personal')}>
                  Personal Information{' '}
                  <PersonSearchIcon className="profileIcons" />
                </button>
              </div>
              <div className="listSettingBlock">
                {' '}
                <button onClick={() => handleSectionClick('settings')}>
                  Settings <SettingsIcon className="profileIcons" />
                </button>
              </div>
              <div className="listSettingBlock">
                {' '}
                <button>
                  Log Out <LogoutIcon className="profileIcons" />
                </button>
              </div>
            </div>
          </div>
        </aside>
        <main className="profileMain">{renderMainSection()}</main>
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
            value={profileName}
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
