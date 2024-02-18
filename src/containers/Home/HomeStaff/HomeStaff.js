import React from 'react'
import "./HomeStaff.scss"
import HomeHeaderBox from '../HomeHeaderBox/HomeHeaderBox'
import Slider from "react-slick";
import Logo2 from "../../../assets/images/home/box_logo_2.png"
import Extra2 from "../../../assets/images/home/box_extra_2.png"
import prevArrow from "../../../assets/images/home/home_staff/prevArrow.svg"
import nextArrow from "../../../assets/images/home/home_staff/nextArrow.svg"
import next from "../../../assets/images/home/home_staff/next.svg"
import prev from "../../../assets/images/home/home_staff/prev.svg"

import home_staff_1 from "../../../assets/images/home/home_staff/home_staff_1.png"
import home_staff_2 from "../../../assets/images/home/home_staff/home_staff_2.png"
import home_staff_3 from "../../../assets/images/home/home_staff/home_staff_3.png"

const listService = [
    home_staff_1, home_staff_2, home_staff_3,
]

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={`btn-prev ${className}`}
            onClick={onClick}
            aria-label={nextArrow}
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
            aria-label={prevArrow}
        >
            <img src={prev} />
        </button>
    );
}

const HomeStaff = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
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
                breakpoint: 600,
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
        <div id="home-staff" className="home-box home-staff">
            <div className="container">
                <HomeHeaderBox
                    typeBox={2}
                    titleBox="PHÓ CHỦ TỊCH ĐOAN TRANG"
                    desBox="Đoan Trang phó chủ tịch thẩm mỹ dưỡng sinh ngũ hành cùng anh chị em leader cam kết đồng hành dạy nghề 100% miễn phí cho tất cả anh chị em. Chỉ cần bạn chăm chỉ, kiên trì, nỗ lưc, và đủ tình yêu thương, có trách nhiệm với khách hàng chắc chắn bạn thành công"
                    urlLogo={Logo2}
                    urlExtra={Extra2}
                />
                <div className={"home-body-box home-body-staff"}>
                    <div className="row gutters-0">
                        <div className="col-12">
                            <div className="service-content">
                                <Slider autoplay={true} {...settings} >
                                    {listService && listService.length > 0 && listService.map((item, index) => {
                                        return (
                                            <div className="service-item" key={index}>
                                                <div className="service-image">
                                                    <img src={item} />
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

export default HomeStaff