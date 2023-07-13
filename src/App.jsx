/* eslint-disable react/self-closing-comp */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './components/HomePage/MainPage';
import ScrollUp from './components/shared/ScrollUp/ScrollUp';
import Footer from './components/shared/Footer/Footer';
import ProfilePage from './components/Profile/ProfilePage';
import './App.css';

import { useEffect } from 'react';

import { UsersService } from './api/services/UsersService.ts';

const App = () => {

  useEffect(() =>{
    const fetchUserInfo = async () => {
      try {
        const userInfo = await UsersService.getUserInfo();
        console.log(userInfo);
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <Router>
      <>
        <ScrollUp />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer></Footer>
      </>
    </Router>
  );
};

export default App;
