/* eslint-disable react/button-has-type */
import '../../../App.css';
import './PersonalInformation.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton } from '@mui/material';

const PersonalInformation = () => {
  const [email, setEmail] = useState('wrongEmail.com');
  const [password, setPassword] = useState('wrongpass');
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
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            )
          }}
        />
      </div>
      {passwordError && (
        <p className="passwordRequirements">
          Password must be at least 8 characters long and contain an uppercase
          letter and a number.
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
};

export default PersonalInformation;
