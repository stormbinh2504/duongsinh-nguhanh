import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { PATH_NAME, setPathName } from '../../utils';
import "./Header.scss"
import logo from "../../assets/images/company/logo.png"

// let phone = 

const Header = () => {
    const history = useHistory()

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const onRedirectHome = () => {
        history.push("/");
    }

    const onScrollStickyHeader = () => {
        let header = document.getElementById("header");
        let containerHome = document.getElementById("container-home");
        let sticky = containerHome.offsetTop;
        console.log("binh_check_scroll", window.pageYOffset, sticky)
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky-header")
        } else {
            header.classList.remove("sticky-header");
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", onScrollStickyHeader);

        return () => {
            window.removeEventListener("scroll", onScrollStickyHeader);
        };
    }, []);

    const onRedirectByPathname = (path) => {
        history.push(path);
    }

    const checkActiveMenu = (key) => {
        let pathnameCurent = window.location.pathname
        if (pathnameCurent === key) {
            return true
        }
        return false
    }

    return (
        <div id="header" className='header'>
            <div className="container">
                <div id="container-header" className="container-header item-center">
                    <div className="container-left">
                        <div className='container-logo item-center' onClick={onRedirectHome}>
                            <img className="img-logo" src={logo} />
                        </div>
                        <div className="container-menu-header">
                            <ul className="list-menu-header item-center">
                                <li className="item-menu-header"><a href="#home">GIỚI THIỆU KOL</a></li>
                                <li className="item-menu-header"><a href="#about">CHI NHÁNH TOÀN QUỐC</a></li>
                                <li className="item-menu-header"><a href="#about">ĐÀO TẠO ĐẠI LÝ</a></li>
                                <li className="item-menu-header"><a href="#family">LEADER ĐẠI LÝ THÀNH CÔNG</a></li>
                                <li className="item-menu-header"><a href="#gallery">PHẢN HỒI KHÁCH HÀNG</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="container-right">
                        <button className="btn-header">Liên hệ</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header