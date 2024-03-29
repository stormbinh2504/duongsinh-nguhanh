import React from 'react'
import "./HomeService.scss"
import HomeHeaderBox from '../HomeHeaderBox/HomeHeaderBox'
import Logo3 from "../../../assets/images/home/box_logo_3.svg"

import urlExtra from "../../../assets/images/home/box_extra_2.svg"
const listService = [
    "1. Giảm cân tổng thế tận gốc",
    "2. Giảm mỡ bụng",
    "3. Giảm bắp tay",
    "4. Giảm bắp đùi",
    "5. Giảm bắp chân",
    "6. Giảm nọng cằm",
    "7. Nâng cơ xóa nhăn mặt",
    "8. Xóa bọng mắt",
    "9. Xóa rãnh cười",
    "10. Xóa thâm quầng mắt",
    "11. Viêm xoang mũi",
    "12. Tắc tuyến lệ",
    "13. Xóa thâm vùng nách",
    "14. Chữa đau đầu mất ngủ",
    "15. Rối loạn tiền đình",
    "16. Đau khớp vai",
    "17. Đau khớp gối",
    "18. Đau khớp hông",
    "19. Đau vùng lưng",
    "20. Đau thoái hóa đốt sống cổ",
    "21. Thái hóa đốt sống lưng",
    "22. Đau mỏi tê bì chân",
    "23. Buồn bực tê bì bắp đùi, chân",
    "24. Run tay",
    "25. Đau nửa đầu vai gáy",
    "26. Giác hơi thải độc vùng vai gáy",
    "27. Giác hơi thải độc toàn thân",
    "28. Nâng mông",
    "29. Nâng ngực",
    "30. Săn chắc ngực",
    "31. Bấm huyệt tăng cân",
    "32. Viêm họng, ho",
    "33. Đầy hơi rối loạn tiêu hóa",
    "34. Táo bón",
    "35. Gan nhiễm mỡ, máu nhiễm mỡ",
    "36. Giảm tiểu đường, huyết áp",
    "37. Giãn tĩnh mạch",
    "38. Nâng cung mày",
    "39. Trẻ hóa bàn tay",
    "40. Trẻ bàn chân",
    "41. Điêu khắc cổ mỹ nhân",
    "42. Điêu khắc eo sline",
    "43. Điêu khắc bắp tay",
    "44. Điêu khắc đùi",
    "45. Đánh hạch vùng ngực",
    "46. Viêm nang lông",
    "47. Rạn vùng bụng",
    "48. Chăm sóc mắt 3 Y",
    "49. Chăm sóc phổi phế"
]
const HomeService = () => {
    return (
        <div id="home-service" className="home-box home-service">
            <div className="container">
                <HomeHeaderBox
                    typeBox={3}
                    titleBox="40 - 60 DỊCH VỤ ĐÀO TẠO MIỄN PHÍ"
                    desBox="Chúng tôi cam kết đào tạo miễn phí cho các đại lý"
                    urlLogo={Logo3}
                    urlExtra={urlExtra}
                />

                <div className={"home-body-box home-body-service"}>
                    <div className="row gutters-0">
                        <div className="col-12">
                            <div className="service-content">
                                <div className="wrap-service-content">
                                    <div className="list-item-service">
                                        {listService.map((item, index) => {
                                            if (index < 15) {
                                                return (
                                                    <div className="item-service" key={index}>
                                                        {item}
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                    <div className="list-item-service">
                                        {listService.map((item, index) => {
                                            if (15 < index && index < 31) {
                                                return (
                                                    <div className="item-service" key={index}>
                                                        {item}
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                    <div className="list-item-service">
                                        {listService.map((item, index) => {
                                            if (index > 31) {
                                                return (
                                                    <div className="item-service" key={index}>
                                                        {item}
                                                    </div>
                                                )
                                            }
                                        })}
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

export default HomeService