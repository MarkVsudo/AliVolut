/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import '../../../App.css';
import '../../../styles/Header.css';
import { useState, useEffect } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import MyLogo from '../../../assets/alivolut-logo.svg';
import { viravaDefault } from '../../../config/authConfig';

const pages = ['Offerings', 'Subscriptions', 'Blog'];
const settings = [
  {
    label: 'Profile',
    onClick: () => {
      // Handle the click event for the "Profile" link
      window.location.href = '/profile';
    }
  },
  'Transactions',
  {
    label: 'Logout',
    onClick: async () => {
      try {
        await viravaDefault.logout();
      } catch (error) {
        console.error(error);
      }
    }
  }
];

const ResponsiveAppBar = ({
  onOfferingsClick,
  onSubscriptionsClick,
  onBlogClick
}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (page) => {
    setActiveButton(page);
    handleCloseNavMenu();

    if (page === 'Offerings') {
      onOfferingsClick();
    } else if (page === 'Subscriptions') {
      onSubscriptionsClick();
    } else if (page === 'Blog') {
      onBlogClick();
    }
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const scrollingUp = prevScrollPos > currentScrollPos;
    setVisible(scrollingUp || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#E9E9E9',
        top: visible ? '0' : '-100px',
        transition: 'top 0.6s',
        borderRadius: '0 0 1rem 1rem'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={MyLogo}
                alt="Logo"
                style={{
                  display: { xs: 'none', md: 'flex' },
                  width: '8rem',
                  height: '4rem'
                }}
                className="ali-logo"
              />
              <CurrencyBitcoinIcon className="btc-logo" />
            </a>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexBasis: '100%',
              textAlign: 'center'
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleButtonClick(page)}
                className={
                  activeButton === page
                    ? 'active-button nav-links'
                    : 'nav-links'
                }
                sx={{
                  my: 2
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, marginLeft: '7rem' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem
                  key={index}
                  onClick={setting.onClick || handleCloseUserMenu}
                >
                  <Typography textAlign="center">
                    {typeof setting === 'string' ? setting : setting.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
