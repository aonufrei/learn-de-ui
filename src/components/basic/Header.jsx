import React from "react"

import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="bg-clback grid py-2 px-2 grid-cols-[0_auto_0] md:grid-cols-[auto_768px_auto] xl:grid-cols-[auto_1280px_auto]">
            <span />
            <div className="flex items-center">
                <Link to={"/"}>
                    <span className="text-clfore text-2xl font-bold">
                        Learn De articles!
                    </span>
                </Link>
                <div className="flex flex-row pl-8">
                    <Link
                        className="text-clfore text-base hover:underline hover:text-clfore"
                        to={"/topics"}
                    >
                        Topics
                    </Link>
                </div>
            </div>
            <span />
        </header>
    )
}

const AdminHeader = ({isLoggedIn}) => {
    return (
        <header className="bg-clback grid py-2 px-2 grid-cols-[0_auto_0] md:grid-cols-[auto_768px_auto] xl:grid-cols-[auto_1280px_auto]">
            <span />
            <div className="flex items-center justify-start">
                <Link to={"/"}>
                    <span className="block text-clfore text-2xl font-bold">
                        Learn De articles!
                    </span>
                </Link>
                <div className="flex-1 flex flex-row justify-between">
                    <div className="flex flex-row pl-8">
                        <Link
                            className="text-clfore hover:underline hover:text-clfore text-base"
                            to={"/admin/topics"}
                        >
                            Manage topics
                        </Link>
                    </div>
                    <Link
                        className="text-clfore hover:underline hover:text-clfore text-base"
                        onClick={() => localStorage.setItem("token", "")}
                        to={"/admin/login"}
                    >
                        {`${isLoggedIn === true ? "Log Out" : ""}`}
                    </Link>
                </div>
            </div>
            <span />
        </header>
    )
}

export { AdminHeader, Header }
