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

  useEffect(() => {
    scrollTopAnimated()
  }, []);

  return (
    <div className="App">
      {/* <ScrollToTop /> */}
      <Header />
      <Home />
      <div id="scrollToTop" className='item-center'><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>
      <Footer />
    </div >
  );
}

export default App;
