/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
import '../../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import crypto1 from '../../assets/crypto1.png';
import crypto2 from '../../assets/crypto2.jpg';
import crypto3 from '../../assets/crypto3.jpg';
import stocks1 from '../../assets/stocks1.jpg';
import stocks2 from '../../assets/stocks2.jpg';
import stocks3 from '../../assets/stocks3.jpg';
import realEst1 from '../../assets/realEst1.jpg';
import realEst2 from '../../assets/realEst2.jpg';
import realEst3 from '../../assets/realEst3.jpg';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules

const Blog = () => {
  return (
    <div className="blogSection">
      <h2>Latest News</h2>
      <div className="swiperContainer">
        <div className="subContainer-1">
          <h5>Crypto</h5>
          <Swiper
            effect="cards"
            grabCursor
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={crypto1} className="blogImg" />
              <h2>Crypto Chronicles: Insights and Analysis</h2>
              <h5>
                Read more
                <ArrowForwardIosIcon />{' '}
              </h5>
            </SwiperSlide>
            <SwiperSlide>
              <img src={crypto2} className="blogImg" />
              <h2>Blockchain Buzz: Exploring the Crypto World</h2>
              <h5>
                Read more
                <ArrowForwardIosIcon />{' '}
              </h5>
            </SwiperSlide>
            <SwiperSlide>
              <img src={crypto3} className="blogImg" />
              <h2>Digital Currency Digest: Trends and Tips</h2>
              <h5>
                Read more
                <ArrowForwardIosIcon />{' '}
              </h5>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="subContainer-2">
          <h5>Stocks</h5>
          <Swiper
            effect="cards"
            grabCursor
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={stocks1} className="blogImg" />
              <h2>Stock Market Insights: Trends and Analysis</h2>
              <h5>
                Read more
                <ArrowForwardIosIcon />{' '}
              </h5>
            </SwiperSlide>
            <SwiperSlide>
              <img src={stocks2} className="blogImg" />
              <h2>Investor's Corner: Unveiling Stock Secrets</h2>
              <h5>
                Read more
                <ArrowForwardIosIcon />{' '}
              </h5>
            </SwiperSlide>
            <SwiperSlide>
              <img src={stocks3} className="blogImg" />
              <h2>Trading Talk: Navigating the Stock Market</h2>
              <h5>
                Read more
                <ArrowForwardIosIcon />{' '}
              </h5>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="subContainer-3">
          <h5>Real Estate</h5>
          <Swiper
            effect="cards"
            grabCursor
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={realEst1} className="blogImg" />
              <h2>Property Prospects: Real Estate Insights and Trends</h2>
              <h5>
                Read more
                <ArrowForwardIosIcon />{' '}
              </h5>
            </SwiperSlide>
            <SwiperSlide>
              <img src={realEst2} className="blogImg" />
              <h2>Homefront Hub: Exploring the Real Estate Market</h2>
              <h5>
                Read more
                <ArrowForwardIosIcon />{' '}
              </h5>
            </SwiperSlide>
            <SwiperSlide>
              <img src={realEst3} className="blogImg" />
              <h2>The Realty Report: Insights for Property Investors</h2>
              <h5>
                Read more
                <ArrowForwardIosIcon />{' '}
              </h5>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Blog;
