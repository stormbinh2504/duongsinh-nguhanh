import React from 'react'
import "./HomeLeader.scss"
import HomeHeaderBox from '../HomeHeaderBox/HomeHeaderBox'
import Slider from "react-slick";
import Logo1 from "../../../assets/images/home/box_logo_1.png"
import Extra1 from "../../../assets/images/home/box_extra_1.png"
import prevArrowStaff from "../../../assets/images/home/home_staff/prevArrowStaff.png"
import nextArrowStaff from "../../../assets/images/home/home_staff/nextArrowStaff.png"
import playVideoStaff from "../../../assets/images/home/home_staff/playVideoStaff.png"

import home_leader_1 from "../../../assets/images/home/home_leader/home_leader_1.png"
import home_leader_2 from "../../../assets/images/home/home_leader/home_leader_2.png"
import home_leader_3 from "../../../assets/images/home/home_leader/home_leader_3.png"

const listLeader = [
    {
        urlImage: home_leader_1,
        name: "Nam Nguyễn, 34 tuổi",
        location: "Hà Nội",
        des: "“Tôi đã mua xe ô tô và nhà sau chỉ 3 tháng từ khi làm đại ý cho Dưỡng Sinh Ngũ Hành. Tôi thật vui khi đã và đang đóng góp một phần không nhỏ cho công ty”",
        isVideo: true,
    },
    {
        urlImage: home_leader_2,
        name: "Tuấn Trần, 44 tuổi",
        location: "Hà Nội",
        des: "“Tôi đã mua xe ô tô và nhà sau chỉ 3 tháng từ khi làm đại ý cho Dưỡng Sinh Ngũ Hành. Tôi thật vui khi đã và đang đóng góp một phần không nhỏ cho công ty”",
    },
    {
        urlImage: home_leader_3,
        name: "Chung Đức, 22 tuổi",
        location: "Hà Nội",
        des: "“Tôi đã mua xe ô tô và nhà sau chỉ 3 tháng từ khi làm đại ý cho Dưỡng Sinh Ngũ Hành. Tôi thật vui khi đã và đang đóng góp một phần không nhỏ cho công ty”",
    },
]

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={`btn-prev ${className}`}
            onClick={onClick}
            aria-label={nextArrowStaff}
        >
            <img src={nextArrowStaff} />
        </button>
    );
}

function SamplePrevArrow(props) {
    const { className, style, to, onClick } = props;
    return (
        <button
            className={`btn-next ${className}`}
            onClick={onClick}
            aria-label={prevArrowStaff}
        >
            <img src={prevArrowStaff} />
        </button>
    );
}

const HomeLeader = () => {

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
        <div id="home-leader" className="home-box home-leader">
            <div className="container">
                <HomeHeaderBox
                    typeBox={1}
                    titleBox="CÁC LEADER ĐẠI LÝ THÀNH CÔNG"
                    desBox="1 năm qua Trang đã giúp hơn 1000 anh chị em thành công với nggề trả hết nợ nần, mua nhà, xe.."
                    urlLogo={Logo1}
                    urlExtra={Extra1}
                />
                <div className={"home-body-box home-body-leader"}>
                    <div className="row gutters-0">
                        <div className="col-12">
                            <div className="leader-content">
                                <Slider autoplay={true} {...settings} >
                                    {listLeader && listLeader.length > 0 && listLeader.map((item, index) => {
                                        return (
                                            <div className="leader-item" key={index}>
                                                <div className="wrap-leader-item">
                                                    <div className="leader-image">
                                                        <img src={item.urlImage} />
                                                        {item.isVideo &&
                                                            <div className="btn-play-video">
                                                                <img src={playVideoStaff} />
                                                            </div>
                                                        }
                                                    </div>
                                                    <div className="leader-info">
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

export default HomeLeader