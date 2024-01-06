import React from "react"

const Page = ({ children }) => {
    return (
        <div className="app-basic-page">
            <span />
            <div className="app-basic-page__content">{children}</div>
            <span />
        </div>
    )
}

export default Page
