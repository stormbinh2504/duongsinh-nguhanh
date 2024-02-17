import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Home.scss"
import { AnimateCounterNumber } from '../../utils';
import { useEffect } from 'react';
import HomeIntroduce from './HomeIntroduce/HomeIntroduce';

const src1 = "//theme.hstatic.net/200000335999/1000709370/14/slideshow_1.jpg?v=1455"
const src2 = "//theme.hstatic.net/200000335999/1000709370/14/slideshow_2.jpg?v=1455"
const src3 = "//theme.hstatic.net/200000335999/1000709370/14/slideshow_2.jpg?v=1455"
const Home = () => {

    const reveal = () => {
        let reveals = document.getElementById('home-counter');
        var windowHeight = window.innerHeight;
        var elementTop = reveals.getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            LoadAnimateCounterNumber()
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", reveal);

        return () => {
            window.removeEventListener("scroll", reveal);
        };
    }, []);

    const LoadAnimateCounterNumber = () => {
        let text1 = document.getElementById('counter-number1');
        let text2 = document.getElementById('counter-number2');
        let text3 = document.getElementById('counter-number3');
        let text4 = document.getElementById('counter-number4');
        AnimateCounterNumber(text1, 0, 15, 3000);
        AnimateCounterNumber(text2, 0, 100, 3000);
        AnimateCounterNumber(text3, 0, 8500, 3000);
        AnimateCounterNumber(text4, 0, 100, 3000);
        window.removeEventListener("scroll", reveal);
    }

    return (
        <div id="container-home" className='container-home' style={{ marginTop: "40px" }}>
            <div className="slider">
                <OwlCarousel items={1}
                    className="owl-theme"
                    loop={true}
                    autoplay={true}
                    nav={true}
                    autoHeight={true}
                    navText={[
                        '<span class="arrow prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
                        '<span class="arrow next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>'
                    ]}
                // margin={8}
                >
                    <div ><img className="img" src={src1} /></div>
                    <div><img className="img" src={src2} /></div>
                    <div><img className="img" src={src3} /></div>
                </OwlCarousel>
            </div>
            <section id="content-home" className="content-home">
                <div className="content-wrap">
                    <HomeIntroduce />
                    <HomeIntroduce />
                    <HomeIntroduce />
                    <HomeIntroduce />
                    <HomeIntroduce />
                    <HomeIntroduce />
                </div>
            </section>
        </div>
    )
}

export default Home