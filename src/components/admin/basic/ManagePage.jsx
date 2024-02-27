import React from "react"

import Page from "../../basic/Page"

import "./basic.css"

export default function ManagePage({ children, title, rightButton, info }) {
    return (
        <Page>
            <div>
                <div>
                    <div className="manage-page__header">
                        <h1 className="manage-page__header-title">{title}</h1>
                        {rightButton}
                    </div>
                    <div>{info}</div>
                </div>
                {children}
            </div>  
        </Page>
    )
}
