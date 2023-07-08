/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import '../../App.css';
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
import EditIcon from '@mui/icons-material/Edit';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton } from '@mui/material';
import AppBarNotMainPage from '../shared/HeaderNotMainPage/AppBarNotMainPage';
import { viravaDefault } from '../../config/authConfig';

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

  const [email, setEmail] = useState('veskovmark99@gmail.com');
  const [password, setPassword] = useState('********');
  const [phoneNumber, setPhoneNumber] = useState('1234567890');
  const [country, setCountry] = useState('Bulgaria');
  const [city, setCity] = useState('Pernik');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSaveClick = () => {
    if (isEmailValid() && isPasswordValid()) {
      setIsEditing(false);
      setEmailError(false);
      setPasswordError(false);
    } else {
      setEmailError(!isEmailValid());
      setPasswordError(!isPasswordValid());
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderMainSection = () => {
    switch (activeSection) {
      case 'accounts':
        return <div>Accounts Section</div>;
      case 'cards':
        return <div>Cards Section</div>;
      case 'personal':
        return (
          <div className="formContainer">
            <div className="inputContainer">
              <TextField
                label="Email"
                value={email}
                disabled={!isEditing}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Invalid email address' : ''}
              />
            </div>
            <div className="inputContainer">
              <TextField
                label="Password"
                value={password}
                type={showPassword ? 'text' : 'password'}
                error={passwordError}
                disabled={!isEditing}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handlePasswordVisibility}>
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  )
                }}
              />
            </div>
            {passwordError && (
              <p className="passwordRequirements">
                Password must be at least 8 characters long and contain an
                uppercase letter and a number.
              </p>
            )}
            <TextField
              label="Phone Number"
              value={phoneNumber}
              disabled={!isEditing}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              label="Country"
              value={country}
              disabled={!isEditing}
              onChange={(e) => setCountry(e.target.value)}
            />
            <TextField
              label="City"
              value={city}
              disabled={!isEditing}
              onChange={(e) => setCity(e.target.value)}
            />
            <div className="iconMainDiv">
              <IconButton onClick={handleEditClick} className="iconSubDiv">
                <EditIcon />
              </IconButton>
              <IconButton onClick={handleSaveClick} className="iconDiv">
                <DoneAllIcon />
              </IconButton>
            </div>
          </div>
        );
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
              <RecentActorsIcon className="profileIcons" />
              <button onClick={() => handleSectionClick('accounts')}>
                Accounts
              </button>
            </div>
            <div className="listSettingBlock">
              <StyleIcon className="profileIcons" />
              <button onClick={() => handleSectionClick('cards')}>Cards</button>
            </div>
            <div className="listSettingBlock">
              <PersonSearchIcon className="profileIcons" />
              <button onClick={() => handleSectionClick('personal')}>
                Personal Information
              </button>
            </div>
            <div className="listSettingBlock">
              <SettingsIcon className="profileIcons" />
              <button onClick={() => handleSectionClick('settings')}>
                Settings
              </button>
            </div>
            <div className="listSettingBlock">
              <LogoutIcon className="profileIcons" />
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
