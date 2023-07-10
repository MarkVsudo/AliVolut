/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import '../../../App.css';
import '../../../styles/ScrollUp.css';

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setVisible(currentScrollPos > window.innerHeight * 0.25);
    setPrevScrollPos(currentScrollPos);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href="#"
      className={`back-top-btn ${visible ? 'active' : ''}`}
      aria-label="back to top"
      onClick={scrollToTop}
      data-back-top-btn
    >
      <ArrowUpwardIcon className="bx-chevron-up" />
    </a>
  );
};

export default ScrollUp;
