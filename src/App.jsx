/* eslint-disable react/self-closing-comp */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './components/HomePage/MainPage';
import ScrollUp from './components/shared/ScrollUp/ScrollUp';
import Footer from './components/shared/Footer/Footer';
import ProfilePage from './components/ProfilePage/ProfilePage';
import './App.css';

const App = () => {


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