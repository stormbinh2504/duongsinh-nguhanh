import React from 'react'
import "./HomeLeader.scss"
import HomeHeaderBox from '../HomeHeaderBox/HomeHeaderBox'
import Slider from "react-slick";
import Logo1 from "../../../assets/images/home/home_about_us/about_icon.svg"
import Extra1 from "../../../assets/images/home/box_extra_1.svg"

// import nextArrow from "../../../assets/images/home/home_staff/nextArrow.svg"
// import prevArrow from "../../../assets/images/home/home_staff/prevArrow.svg"

import next from "../../../assets/images/home/home_staff/next.svg"
import prev from "../../../assets/images/home/home_staff/prev.svg"
import playVideoStaff from "../../../assets/images/home/home_staff/playVideoStaff.png"

import home_leader_1 from "../../../assets/images/home/home_leader/home_leader_1.png"
import home_leader_2 from "../../../assets/images/home/home_leader/home_leader_2.png"
import home_leader_3 from "../../../assets/images/home/home_leader/home_leader_3.png"
import home_leader_4 from "../../../assets/images/home/home_leader/home_leader_4.png"
import home_leader_5 from "../../../assets/images/home/home_leader/home_leader_5.png"
import home_leader_6 from "../../../assets/images/home/home_leader/home_leader_6.png"
import home_leader_7 from "../../../assets/images/home/home_leader/home_leader_7.png"
import home_leader_8 from "../../../assets/images/home/home_leader/home_leader_8.png"

const listLeader = [
    // {
    //     urlImage: home_leader_1,
    //     name: "Nam Nguyễn, 34 tuổi",
    //     location: "Hà Nội",
    //     des: "“Tôi đã mua xe ô tô và nhà sau chỉ 3 tháng từ khi làm đại ý cho Dưỡng Sinh Ngũ Hành. Tôi thật vui khi đã và đang đóng góp một phần không nhỏ cho công ty”",
    //     isVideo: true,
    // },
    {
        urlImage: home_leader_2,
        name: "Mai Loan",
        location: "Vĩnh Tường - Vĩnh Phúc",
        des: "“Mua được chiếc xe cùng với sự hỗ trợ của Phó Chủ Tịch Đoan Trang khiến tôi cảm thấy vô cùng hạnh phúc.”",
    },
    {
        urlImage: home_leader_3,
        name: "Hưng Phùng - 0979.116.049",
        location: "Vĩnh phúc",
        des: "“Tôi rất hạnh phúc vì đã có cơ hội mua được chiếc xe mới, một bước quan trọng trong cuộc sống, đặc biệt khi làm việc cùng phó chủ tịch Đoan Trang”",
    },
    {
        urlImage: home_leader_4,
        name: "Vợ chồng Mai Lịch",
        location: "Hà Nội",
        des: "“Rất hạnh phúc khi được mua được xe khi làm việc cùng phó chủ tịch Đoan Trang.”",
    },
    {
        urlImage: home_leader_5,
        name: "Đoàn Tươi - 033.675.0346",
        location: "Hải Phòng",
        des: "“Một cảm giác vô cùng hạnh phúc khi tôi có cơ hội làm việc cùng phó chủ tịch Đoan Trang và cuối cùng đã mua được chiếc xe mới của mình”",
    },
    {
        urlImage: home_leader_6,
        name: "Linh Vũ - 0984.034.557",
        location: "Tuyên Quang",
        des: "“Tôi rất hạnh phúc khi được làm việc cùng phó chủ tịch Đoan Trang và sau một thời gian cống hiến, tôi đã có đủ tiền để mua được chiếc xe mơ ước.”",
    },
    {
        urlImage: home_leader_7,
        name: "Thanh Tâm - 036 6125392",
        location: "Yên Bái",
        des: "“Tôi vô cùng hạnh phúc khi được mua được chiếc xe mới, nhờ vào cơ hội làm việc cùng phó chủ tịch Đoan Trang”",
    },
    {
        urlImage: home_leader_8,
        name: "Thơm Đặng - 0363.769.129",
        location: "Yên Bái",
        des: "“Hạnh phúc vô tận khi mua được chiếc xe mới, nhờ sự hỗ trợ và cùng làm việc cùng Phó Chủ tịch Đoan Trang”",
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

const HomeLeader = () => {

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
        <div id="home-leader" className="home-box home-leader">
            <div className="container">
                <HomeHeaderBox
                    typeBox={1}
                    titleBox="CÁC LEADER ĐẠI LÝ THÀNH CÔNG"
                    desBox="1 năm qua Trang đã giúp hơn 1000 anh chị em thành công với nghề trả hết nợ nần, mua nhà, xe.."
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