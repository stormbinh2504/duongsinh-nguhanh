import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
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

const Home = () => {

    return (
        <div id="container-home" className='container-home'>
            <div id="home-banner" className="home-banner">
                <img src={banner_1} />
            </div>
            {/*<div className="slider">*/}
            {/*    <OwlCarousel items={1}*/}
            {/*        className="owl-theme"*/}
            {/*        loop={true}*/}
            {/*        autoplay={true}*/}
            {/*        nav={true}*/}
            {/*        autoHeight={true}*/}
            {/*        navText={[*/}
            {/*            '<span class="arrow prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',*/}
            {/*            '<span class="arrow next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>'*/}
            {/*        ]}*/}
            {/*    // margin={8}*/}
            {/*    >*/}
            {/*        <div ><img className="img" src={src1} /></div>*/}
            {/*        <div><img className="img" src={src2} /></div>*/}
            {/*        <div><img className="img" src={src3} /></div>*/}
            {/*    </OwlCarousel>*/}
            {/*</div>*/}
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