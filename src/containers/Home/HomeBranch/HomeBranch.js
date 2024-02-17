import React from 'react'
import "./HomeBranch.scss"
import HomeHeaderBox from '../HomeHeaderBox/HomeHeaderBox'
import Logo1 from "../../../assets/images/home/box_logo_1.png"
import Extra1 from "../../../assets/images/home/box_extra_1.png"
import home_branch_map from "../../../assets/images/home/home_branch/home_branch_map.png"
const HomeBranch = () => {
    return (
        <div id="home-branch" className="home-box home-branch">
            <div className="container">
                <HomeHeaderBox
                    typeBox={1}
                    titleBox="CÁC CHI NHÁNH TRÊN TOÀN QUỐC"
                    desBox="Với sự ủng hộ và tin cậy của khách hàng. Ngũ Hành Group hiện nay đang có  hơn 20 chi nhánh trên toàn quốc."
                    urlLogo={Logo1}
                    urlExtra={Extra1}
                />
                <div className={"home-body-box home-body-branch"}>
                    <div className="row gutters-0">
                        <div className="col-12">
                            <div className="map-content">
                                <img src={home_branch_map} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBranch