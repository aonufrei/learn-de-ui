import React, { useState } from "react"

import Page from "../../../basic/Page"

import { useNavigate } from "react-router-dom"

import { login } from "../../../../service/APIService"

import { TextInput, ActionButton } from "../../../ui/Inputs"

const LoginPage = ({ onAuthorize }) => {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showError, setShowError] = useState(false)

    const onLogin = () => {
        login(username, password).then((tk) => {
            setShowError(false)
            if (tk !== undefined && tk !== null && tk !== "") {
                onAuthorize(tk)
                navigate("/admin/topics")
            } else {
                setUsername("")
                setPassword("")
                setShowError(true)
            }
        })
    }

    return (
        <Page title="Login">
            <div>
                <TextInput
                    label="Username: "
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <TextInput
                    className="mb-5"
                    label="Password: "
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {showError && (
                    <p className="text-clfailure">
                        Username or password is not correct
                    </p>
                )}
                <div className="mt-5">
                    <ActionButton
                        className="bg-clbtn text-clfont2"
                        onClick={onLogin}
                    >
                        Login
                    </ActionButton>
                </div>
            </div>
        </Page>
    )
}

export default LoginPage
