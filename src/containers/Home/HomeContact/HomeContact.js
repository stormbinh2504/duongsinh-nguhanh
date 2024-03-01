import React from 'react'
import "./HomeContact.scss"
import HomeHeaderBox from '../HomeHeaderBox/HomeHeaderBox'
import Logo1 from "../../../assets/images/home/home_about_us/about_icon.svg"

import Extra1 from "../../../assets/images/home/box_extra_1.svg"
import InfoContact from '../ModalContact/InfoContact/InfoContact'

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
                            <InfoContact />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContact