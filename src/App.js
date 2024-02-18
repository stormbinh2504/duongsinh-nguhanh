import React, { useEffect } from 'react'

import logo from './logo.svg';
import './App.scss';
import "../src/styles/styles.scss";
import $ from 'jquery';
import Header from './containers/Header/Header';
import Home from './containers/Home/Home';
import Footer from './containers/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

function App() {
  const scrollTopAnimated = () => {
    $('#scrollToTop').on('click', function () {
      $("html, body").animate({ scrollTop: 0 }, 1200);
    })
  }

  let scTimer = 0
  let scrollY = 0
  const handleScroll = () => {
      if (scTimer) return;
      scTimer = setTimeout(() => {
          scrollY = window.scrollY;
          clearTimeout(scTimer);
          scTimer = 0;
      }, 100);
  }

  useEffect(() => {
    scrollTopAnimated()
  }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

    }, [scrollY]);

  return (
    <div className="App">
      {/* <ScrollToTop /> */}
      <Header />
      <Home />
        {scrollY > 300 ?
            <div id="scrollToTop" className='item-center'><i className="fa fa-angle-double-up" aria-hidden="true"></i>
            </div> : null}
        <Footer/>
    </div>
  );
}

export default App;
