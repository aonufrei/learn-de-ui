import React from "react"

const Page = ({ children, title }) => {
    return (
        <div className="app-basic-page">
            <span />
            <div className="app-basic-page__content">
                {title && (
                    <>
                        <h1 className="page__title">{title}</h1>
                        <hr className="page__divider"/>
                    </>
                )}

                {children}
            </div>
            <span />
        </div>
    )
}

export default Page
