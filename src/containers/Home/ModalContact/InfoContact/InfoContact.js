import React from 'react'
import "./InfoContact.scss"
import home_contact_ads from "../../../../assets/images/home/home_contact/home_contact_ads.png"

const InfoContact = ({ isOpen, toogle }) => {

    return (
        <div className="info-contact">
            <div className="wrap-info-contact">
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
                                <input type="text" className="form-input" id="phone" name="phone" placeholder="Số điện thoại" required="" data-error="Please enter your name" />
                            </div>
                            <div className="group-input">
                                <input type="text" className="form-input" id="email" name="email" placeholder="Email" required="" data-error="Please enter your name" />
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
    )
}

export default InfoContact