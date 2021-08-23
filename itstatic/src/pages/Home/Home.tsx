import React from 'react';
import './Home.scss';
import Banner from './Banner';
import Product from './Product';
import HomeService from './HomeService';
import Tech from './Tech';

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <Banner />
        <Product />
        <HomeService />
        <Tech />
      </div>
    </>
  )
}

export default Home
