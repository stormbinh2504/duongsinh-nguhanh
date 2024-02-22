import React from 'react'
import "./Home.scss"
import { AnimateCounterNumber } from '../../utils';
import { useEffect } from 'react';
import HomeIntroduce from './HomeIntroduce/HomeIntroduce';
import HomeStaff from './HomeStaff/HomeStaff';
import HomeBranch from './HomeBranch/HomeBranch';
import HomeService from './HomeService/HomeService';
import HomeAboutUs from './HomeAboutUs/HomeAboutUs';
import HomeLeader from './HomeLeader/HomeLeader';
import HomeContact from './HomeContact/HomeContact';

import banner_1 from "../../assets/images/home/banner/banner_1.png"
// import banner_mobile from "../../assets/images/home/banner/banner_mobile.png"

const Home = () => {

    return (
        <div id="container-home" className='container-home'>
            <div id="home-banner" className="home-banner">
                <img className="banner-desktop" src={banner_1} />
                <img className="banner-mb" src={banner_1} />
            </div>
            <section id="content-home" className="content-home">
                <div className="content-wrap">
                    <HomeIntroduce />
                    <HomeStaff />
                    <HomeBranch />
                    <HomeService />
                    <HomeLeader />
                    <HomeAboutUs />
                    <HomeContact />
                </div>
            </section>
        </div>
    )
}

export default Home