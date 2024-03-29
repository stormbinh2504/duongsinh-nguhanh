import React from 'react'
import "./HomeAboutUs.scss"
import HomeHeaderBox from '../HomeHeaderBox/HomeHeaderBox'
import Slider from "react-slick";
import Logo2 from "../../../assets/images/home/box_logo_2.svg"
import Extra2 from "../../../assets/images/home/box_extra_2.svg"
// import prevArrow from "../../../assets/images/home/home_staff/prevArrow.svg"
// import nextArrow from "../../../assets/images/home/home_staff/nextArrow.svg"
import next from "../../../assets/images/home/home_staff/next.svg"
import prev from "../../../assets/images/home/home_staff/prev.svg"
import playVideoStaff from "../../../assets/images/home/home_staff/playVideoStaff.png"

import home_about_us_1 from "../../../assets/images/home/home_about_us/home_about_us_1.png"
import home_about_us_2 from "../../../assets/images/home/home_about_us/home_about_us_2.png"
import home_about_us_3 from "../../../assets/images/home/home_about_us/home_about_us_3.png"

const listCustomer = [
    {
        urlImage: home_about_us_1,
        name: "Nam Nguyễn, 34 tuổi",
        location: "Hà Nội",
        des: "“Tôi đã cảm thấy vô cùng hạnh phúc và hài lòng khi trải nghiệm dịch vụ ngũ hành dưỡng sinh. Đó thực sự là một trải nghiệm tuyệt vời.”",
        isVideo: true,
    },
    {
        urlImage: home_about_us_2,
        name: "Tuấn Trần, 44 tuổi",
        location: "Hà Nội",
        des: "“Tôi cảm thấy rất tuyệt vời sau khi trải nghiệm dịch vụ ngũ hành dưỡng sinh, thực sự hài lòng với trải nghiệm của mình.”",
    },
    {
        urlImage: home_about_us_3,
        name: "Chung Đức, 22 tuổi",
        location: "Hà Nội",
        des: "“Tôi cảm thấy vô cùng hạnh phúc và hài lòng sau khi trải nghiệm dịch vụ ngũ hành dưỡng sinh. Đó là một trải nghiệm tuyệt vời”",
    },
]

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={`btn-prev ${className}`}
            onClick={onClick}
            aria-label={next}
        >
            <img src={next} />
        </button>
    );
}

function SamplePrevArrow(props) {
    const { className, style, to, onClick } = props;
    return (
        <button
            className={`btn-next ${className}`}
            onClick={onClick}
            aria-label={prev}
        >
            <img src={prev} />
        </button>
    );
}

const HomeAboutUs = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 5000, // Set the autoplay speed in milliseconds
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id="home-about-us" className="home-box home-about-us">
            <div className="container">
                <HomeHeaderBox
                    typeBox={2}
                    titleBox="KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI"
                    desBox="Hơn 90% sự phản hồi của khách hàng về dịch vụ của Dưỡng Sinh Ngũ Hành đều là tích cực. 10% là yêu cầu chúng tôi mở thêm chi nhánh"
                    urlLogo={Logo2}
                    urlExtra={Extra2}
                />
                <div className={"home-body-box home-body-about-us"}>
                    <div className="row gutters-0">
                        <div className="col-12">
                            <div className="customer-content">
                                <Slider autoplay={true} {...settings} >
                                    {listCustomer && listCustomer.length > 0 && listCustomer.map((item, index) => {
                                        return (
                                            <div className="customer-item" key={index}>
                                                <div className="wrap-customer-item">
                                                    <div className="customer-image">
                                                        <img src={item.urlImage} />
                                                        {item.isVideo &&
                                                            <div className="btn-play-video">
                                                                <img src={playVideoStaff} />
                                                            </div>
                                                        }
                                                    </div>
                                                    <div className="customer-info">
                                                        <div className="name">{item.name}</div>
                                                        <div className="location">{item.location}</div>
                                                        <div className="line"></div>
                                                        <div className="description">{item.des}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default HomeAboutUs