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
              <p>Uncover the stories behind successful crypto projects, learn about regulatory updates, and gain valuable investment strategies. With Crypto Chronicles, readers can stay informed, make informed decisions, and ride the wave of the digital revolution.</p>
              <h5>
                Read more
                <ArrowForwardIosIcon className='arrowBlog'/>{' '}
              </h5>
            </SwiperSlide>
            <SwiperSlide>
              <img src={crypto2} className="blogImg" />
              <h2>Blockchain Buzz: Exploring the Crypto World</h2>
              <p>Whether you're a crypto enthusiast or a novice investor, Digital Currency Digest provides valuable insights and practical advice to navigate the ever-evolving world of digital currencies. Discover new opportunities, learn about trading strategies, and explore the potential of emerging cryptocurrencies.</p>
              <h5>
                Read more
                <ArrowForwardIosIcon className='arrowBlog'/>{' '}
              </h5>
            </SwiperSlide>
            <SwiperSlide>
              <img src={crypto3} className="blogImg" />
              <h2>Digital Currency Digest: Trends and Tips</h2>
              <p>Immerse yourself in the exciting realm of blockchain technology and cryptocurrencies with Blockchain Buzz. Uncover the transformative potential of blockchain beyond cryptocurrencies, delve into real-world use cases, and explore how this revolutionary technology is reshaping industries.</p>
              <h5>
                Read more
                <ArrowForwardIosIcon className='arrowBlog'/>{' '}
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
              <p>From identifying potential investment opportunities to understanding market volatility, Stock Market Insights provides comprehensive analysis and trends to help investors make informed decisions. Explore the impact of economic indicators, corporate earnings, and global events on stock market performance.</p>
              <h5>
                Read more
                <ArrowForwardIosIcon className='arrowBlog'/>{' '}
              </h5>
            </SwiperSlide>
            <SwiperSlide>
              <img src={stocks2} className="blogImg" />
              <h2>Investor's Corner: Unveiling Stock Secrets</h2>
              <p>Investor's Corner aims to demystify the complexities of stock investing by unveiling the secrets of seasoned investors. From fundamental analysis to value investing principles, this blog equips readers with the knowledge and tools needed to make wise investment decisions.</p>
              <h5>
                Read more
                <ArrowForwardIosIcon className='arrowBlog'/>{' '}
              </h5>
            </SwiperSlide>
            <SwiperSlide>
              <img src={stocks3} className="blogImg" />
              <h2>Trading Talk: Navigating the Stock Market</h2>
              <p>Whether you're a seasoned trader or a beginner, Trading Talk offers insights, techniques, and practical advice to help you navigate the stock market effectively. Discover technical analysis tools, understand market indicators, and explore various trading styles to optimize your trading performance.</p>
              <h5>
                Read more
                <ArrowForwardIosIcon className='arrowBlog'/>{' '}
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
              <p>Explore the dynamic world of cryptocurrencies with Crypto Chronicles. Gain valuable insights and analysis on the latest trends, market movements, and regulatory developments. Stay informed and make informed decisions in the ever-evolving crypto landscape.</p>
              <h5>
                Read more
                <ArrowForwardIosIcon className='arrowBlog'/>{' '}
              </h5>
            </SwiperSlide>
            <SwiperSlide>
              <img src={realEst2} className="blogImg" />
              <h2>Homefront Hub: Exploring the Real Estate Market</h2>
              <p>Stay up-to-date with the latest trends and developments in the digital currency realm with Digital Currency Digest. From market updates to emerging technologies, this blog offers a comprehensive overview of the digital currency landscape.</p>
              <h5>
                Read more
                <ArrowForwardIosIcon className='arrowBlog'/>{' '}
              </h5>
            </SwiperSlide>
            <SwiperSlide>
              <img src={realEst3} className="blogImg" />
              <h2>The Realty Report: Insights for Property Investors</h2>
              <p>Immerse yourself in the captivating world of blockchain technology and cryptocurrencies with Blockchain Buzz. Discover the latest news, innovations, and use cases of blockchain beyond cryptocurrencies, including supply chain management, decentralized applications, and more.</p>
              <h5>
                Read more
                <ArrowForwardIosIcon className='arrowBlog'/>{' '}
              </h5>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Blog;
