import React from 'react';
import HomeSlider from '../Components/HomeSlider/HomeSlider';
import HomeAboutUs from '../Components/HomeAboutUs/HomeAboutUs';
import HomeFeature from '../Components/HomeFeature/HomeFeature';
import HomeContactUs from '../Components/HomeContactUs/HomeContactUs';

const Home = () => {
  return (
    <>
      <HomeSlider/>
      <HomeAboutUs/>
      <HomeFeature/>
      <HomeContactUs/>
    </>
  );
}

export default Home