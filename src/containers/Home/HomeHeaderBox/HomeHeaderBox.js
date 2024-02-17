import React from 'react'
import "./HomeHeaderBox.scss"

import Logo2 from "../../../assets/images/home/box_logo_2.png"
import Extra2 from "../../../assets/images/home/box_extra_2.png"
import Logo3 from "../../../assets/images/home/box_logo_3.png"

const HomeHeaderBox = ({ typeBox, titleBox, desBox, urlLogo, urlExtra }) => {
    let addClassNamePar = ""
    if (typeBox) {
        addClassNamePar = "home-header-box-" + typeBox
    }
    return (
        <div id="home-header-box" className={"home-header-box " + addClassNamePar}>
            <div className="logo-box item-center">
                <img className="img-logo-box item-center" src={urlLogo} />
            </div>
            <div className="content-box item-center">
                <div className="wrap-content-box">
                    <div className="title-box text-center">
                        {titleBox}
                    </div>
                    <div className="description-box text-center">
                        {desBox}
                    </div>
                </div>
            </div>
            <div className="extra-box item-center">
                <img className="img-extra-box item-center" src={urlExtra} />
            </div>
        </div>
    )
}

export default HomeHeaderBox