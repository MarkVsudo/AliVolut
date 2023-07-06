/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
import '../../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
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
            </SwiperSlide>
            <SwiperSlide>
              <img src={crypto2} className="blogImg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={crypto3} className="blogImg" />
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
            </SwiperSlide>
            <SwiperSlide>
              <img src={stocks2} className="blogImg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={stocks3} className="blogImg" />
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
            </SwiperSlide>
            <SwiperSlide>
              <img src={realEst2} className="blogImg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={realEst3} className="blogImg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Blog;
