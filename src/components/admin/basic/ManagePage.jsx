import React from "react"

import Page from "../../basic/Page"

export default function ManagePage({
    children,
    title,
    rightButton,
    info,
}) {

    return (
        <Page>
            <div>
                <div>
                    <div className="flex justify-between items-center pb-5">
                        <h1 className="pb-5 font-bold">{title}</h1>
                        {rightButton}
                    </div>
                    <div>{info}</div>
                </div>
                {children}
            </div>
        </Page>
    )
}
