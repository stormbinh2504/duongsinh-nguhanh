import React from 'react'
import "./Footer.scss"
import logo_footer from "../../assets/images/company/logo_footer.png"


// let phone = 
const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-wrap">
                    <div className="footer-wrap-content">
                        <div className="column column-1 item-center">
                            <div className="block">
                                <div className="block-img item-center">
                                    <img src={logo_footer} />
                                </div>
                                <div className="box-company-desc">
                                    <div className="company-name item-center">
                                        CÔNG TY CỔ PHẦN TẬP ĐOÀN NGŨ HÀNH
                                    </div>
                                    <div className="company-desc item-center">
                                        Mã số doanh nghiệp: 0109139761
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column column-2 item-center">
                            <div className="block">
                                <div className="address-company">
                                    Trụ sở: Số 12/102 Ngụy Như Kon Tum, Nhân
                                    Chính, Thanh Xuân, Hà Nội
                                </div>
                                <div className="phone-company">
                                    Liên Hệ: {" "}
                                    <span className="highlight">
                                        0972.19.5555
                                    </span>
                                </div>
                                <div className="email-company">
                                    Email:
                                    <p style={{ marginTop: "1rem" }}>Nguhanhgroup@gmail.com</p>
                                    <p style={{ marginBottom: "unset" }}>Tuyendung.nguhanhgroup@gmail.com</p>
                                </div>
                                <div className="hotline-company">
                                    Hotline tuyển dụng: {" "}
                                    <span className="highlight">
                                        0972.19.5555
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="column-3">
                            <iframe
                                width="250px"
                                height="300px"
                                allowfullscreen="true"
                                src="https://www.facebook.com/media/set/?set=a.740692061416596&type=3&ref=embed_page"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer