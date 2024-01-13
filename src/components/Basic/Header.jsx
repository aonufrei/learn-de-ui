import React from "react"

import "./basic.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="header app-bar always-on-top">
            <span />
            <div className="header__container">
                <Link to={"/"}>
                    <span className="header__logo">Learn De articles!</span>
                </Link>
                <div className="header-nav__container">
                    <Link className="header-nav__link" to={"/topics"}>
                        Topics
                    </Link>
                </div>
            </div>
            <span />
        </header>
    )
}

export default Header
