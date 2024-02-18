import React, { useEffect } from 'react'


import './App.scss';
import "../src/styles/styles.scss";

import Header from './containers/Header/Header';
import Home from './containers/Home/Home';
import Footer from './containers/Footer/Footer';

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

function App() {
  // const scrollTopAnimated = () => {
  //   $('#scrollToTop').on('click', function () {
  //     $("html, body").animate({ scrollTop: 0 }, 1200);
  //   })
  // }

  let scrollY = 0
  const handleScroll = () => {
      const backToTop = document.getElementById('scrollToTop')
      scrollY = window.scrollY;
      if(scrollY > 300){
          backToTop.style.display = 'block'
      }else{
          backToTop.style.display = 'none'

      }
  }
    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

  useEffect(() => {
    // scrollTopAnimated()
  }, []);

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

    }, []);

  return (
      <div className="App">
          {/* <ScrollToTop /> */}
          <Header/>
          <Home/>
          <div id="scrollToTop" onClick={() => toTop()} className='item-center' ><i className="fa fa-angle-double-up" aria-hidden="true"></i>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
