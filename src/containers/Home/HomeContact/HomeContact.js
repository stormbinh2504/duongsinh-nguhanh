import React from 'react'
import "./HomeContact.scss"
import HomeHeaderBox from '../HomeHeaderBox/HomeHeaderBox'
import Logo1 from "../../../assets/images/home/box_logo_1.png"
import Extra1 from "../../../assets/images/home/box_extra_1.png"
import home_contact_ads from "../../../assets/images/home/home_contact/home_contact_ads.png"

const HomeContact = () => {
    return (
        <div id="home-contact" className="home-box home-contact">
            <div className="container">
                <HomeHeaderBox
                    typeBox={1}
                    titleBox="LIÊN HỆ"
                    desBox="Chúng tôi cam kết đào tạo miễn phí cho các đại lý"
                    urlLogo={Logo1}
                    urlExtra={Extra1}
                />
                <div className={"home-body-box home-body-contact"}>
                    <div className="row gutters-0">
                        <div className="col-12">
                            <div className="contact-content">
                                <div className="wrap-contact-content">
                                    <div className="content-left">
                                        <div className="block-img">
                                            <img src={home_contact_ads} />
                                        </div>
                                    </div>
                                    <div className="content-right">
                                        <div className="wrap-content-right">
                                            <div className="title">
                                                Liên hệ với chúng tôi
                                            </div>
                                            <div className="input-info">
                                                <div className="group-input">
                                                    <input type="text" className="form-input" id="name" name="name" placeholder="Nhập tên" required="" data-error="Please enter your name" />
                                                </div>
                                                <div className="group-input">
                                                    <input type="text" className="form-input" id="name" name="name" placeholder="Số điện thoại" required="" data-error="Please enter your name" />
                                                </div>
                                                <div className="group-input">
                                                    <input type="text" className="form-input" id="name" name="name" placeholder="Email" required="" data-error="Please enter your name" />
                                                </div>
                                                <div className="group-input">
                                                    <textarea className="form-input" id="message" placeholder="Tin nhắn"
                                                        rows="4" data-error="Write your message" required></textarea>
                                                </div>

                                                <button className="btn btn-send" id="submit" type="submit">
                                                    Gửi
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContact