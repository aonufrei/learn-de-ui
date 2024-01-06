import React from "react"

import "./basic.css"

const Header = () => {
    return (
        <header className="app-bar bar-stick-to-top always-on-top">
            <div className="app-bar__container">
                <span className="app-header__logo">Learn De articles!</span>
            </div>
        </header>
    )
}

export default Header
