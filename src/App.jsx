/* eslint-disable react/self-closing-comp */
import { useRef } from 'react';
import ResponsiveAppBar from './components/HomePage/ResponsiveAppBar';
import MainPage from './components/HomePage/MainPage';
import StartTransferringButton from './components/HomePage/StartTransferringButton';
import CardsSection from './components/HomePage/CardsSection';
import Subscription from './components/HomePage/Subscription';
import Blog from './components/HomePage/Blog';
import ScrollUp from './components/HomePage/ScrollUp';
import ScrollDiscover from './components/HomePage/ScrollDiscover';
import './App.css';
import Footer from './components/HomePage/Footer';

const App = () => {
  const cardsSectionRef = useRef(null);
  const subscriptionSectionRef = useRef(null);
  const blogSectionRef = useRef(null);

  const handleRedirectToCards = () => {
    cardsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRedirectToSubscription = () => {
    subscriptionSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRedirectToBlog = () => {
    blogSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <ResponsiveAppBar
        onOfferingsClick={handleRedirectToCards}
        onSubscriptionsClick={handleRedirectToSubscription}
        onBlogClick={handleRedirectToBlog}
      />
      <ScrollUp />
      <MainPage />
      <ScrollDiscover />
      <StartTransferringButton />
      <div ref={cardsSectionRef}>
        <CardsSection />
      </div>
      <div ref={subscriptionSectionRef}>
        <Subscription />
      </div>
      <div ref={blogSectionRef}>
        <Blog />
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
