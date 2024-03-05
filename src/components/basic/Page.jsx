import React from "react"

const Page = ({ children, title }) => {
    return (
        <div className="grid h-full text-clfont grid-cols-[0_auto_0] md:grid-cols-[auto_768px_auto] xl:grid-cols-[auto_1280px_auto]">
            <span />
            <div className="bg-clfore px-10 pt-3 pb-10 mb-0 md:p-10 md:mb-20">
                {title && (
                    <>
                        <h1 className="pb-5 font-bold">{title}</h1>
                        <hr className="border-none h-0.5 bg-clfont mb-5"/>
                    </>
                )}
                {children}
            </div>
            <span />
        </div>
    )
}

export default Page
