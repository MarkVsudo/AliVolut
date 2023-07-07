/* eslint-disable react/button-has-type */
import { useState } from 'react';
import '../../App.css';
import Avatar from '@mui/material/Avatar';
import AppBarNotMainPage from '../shared/HeaderNotMainPage/AppBarNotMainPage';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SettingsIcon from '@mui/icons-material/Settings';
import StyleIcon from '@mui/icons-material/Style';
import LogoutIcon from '@mui/icons-material/Logout';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('accounts');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const renderMainSection = () => {
    switch (activeSection) {
      case 'edit':
        return <div>Edit Profile</div>
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
              alt="Remy Sharp"
              src="/static/images/avatar/2.jpg"
              className="avatarProfile"
            />
            <div>
              <span className="profileName">Mark Veskov</span>
              <button onClick={() => handleSectionClick('edit')}>Edit profile</button>
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
    </>
  );
};

export default ProfilePage;
