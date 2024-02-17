import React from 'react'
import "./HomeIntroduce.scss"
import HomeHeaderBox from '../HomeHeaderBox/HomeHeaderBox'
import Logo1 from "../../../assets/images/home/box_logo_1.png"
import Extra1 from "../../../assets/images/home/box_extra_1.png"
import home_introduce_1 from "../../../assets/images/home/home_introduce/home_introduce_1.png"
import home_introduce_2 from "../../../assets/images/home/home_introduce/home_introduce_2.png"
import home_introduce_3 from "../../../assets/images/home/home_introduce/home_introduce_3.png"
import home_introduce_4 from "../../../assets/images/home/home_introduce/home_introduce_4.png"
import home_introduce_5 from "../../../assets/images/home/home_introduce/home_introduce_5.png"


const listTarget = [
    {
        urlIcon: home_introduce_1,
        title: "Tăng doanh số",
        description: "Ngũ hành giúp doanh số tăng lên gấp 2-3 lần do gia trị dịch vụ cao, giải quyết được vấn đề khách hàng, chuyển hóa đưa cơ thể về trạng thái cân bằng"
    },
    {
        urlIcon: home_introduce_2,
        title: "Cải thiện sức khỏe",
        description: "Mang lại cho khách hàng cảm giác khỏe mạnh, người nhẹ, có nhiều khách hàng theo và điều trị tại ngũ hành 7 năm nay",
    },
    {
        urlIcon: home_introduce_3,
        title: "Marketing tốt",
        description: "Chất lượng, sự uy tín, dịch vụ được Ngũ Hành chú trọng. Vậy nên việc marketing truyền miệng, kết quả thật người thật đi bền bỉ với Ngũ Hành trong nhiều năm qua.",
    },
    {
        urlIcon: home_introduce_4,
        title: "Doanh thu tăng trưởng",
        description: "Doanh thu tăng, khách hàng biết ơn , mang quà đến cho mình, đồng nghĩa lương nhân sự tăng, nhân sự gắn bó lâu dàI, ổn định cuộc sống",
    },
    {
        urlIcon: home_introduce_5,
        title: "Uy tín",
        description: "Không bị khổ chủ: Đến với Ngũ Hành chỉ 5-7 ngày có nghề làm trong tay cả đời vì còn người là còn béo, còn người thì còn ốm đau bệnh tật.",
    }
]
const HomeIntroduce = () => {
    return (
        <div id="home-introduce" className="home-box home-introduce">
            <div className="container">
                <HomeHeaderBox
                    typeBox={2}
                    titleBox="GIỚI THIỆU"
                    desBox="Thế kỷ 21: Sức khỏe và sắc đẹp là chìa khóa thành công. Trải qua cuộc sống với phương trâm thêm và bớt dịch vụ. Độc đáo với 40-60 dịch vụ chăm sóc sức khỏe toàn diện từ máy, kem, đến tinh dầu. Từ tăng cân đến giảm cân, giải quyết mọi vấn đề về thể chất và tinh thầN"
                    urlLogo={Logo1}
                    urlExtra={Extra1}
                />
                <div className={"home-body-box home-body-introduce"}>
                    <div className="row gutters-0">
                        <div className="col-12">
                            <div className="target-content">
                                {listTarget.map((item, index) => {
                                    return (
                                        <div className="target-item">
                                            <div className="target-image">
                                                <img src={item.urlIcon} />
                                            </div>
                                            <div className="target-title">{item.title}</div>
                                            <div className="target-desc">{item.description}</div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeIntroduce