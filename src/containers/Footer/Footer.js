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
                        <div className="column column-2">
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
                        {/* https://www.youtube.com/watch?v=gtWMWMt12RU */}
                        <div className="column-3">
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnguhanhduongsinhvien5555%2F%3Fref%3Dembed_page&tabs=timeline&width=340&height=250&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="340" height="250" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer