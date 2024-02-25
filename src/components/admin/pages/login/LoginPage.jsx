import React, { useState } from "react"

import Page from "../../../basic/Page"

import { login } from "../../../../service/APIService"

import "./styles.css"
import "../../basic/modal.css"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showError, setShowError] = useState(false)

    const onLogin = () => {
        login(username, password).then((tk) => {
            setShowError(false)
            if (tk !== undefined && tk !== null && tk !== "") {
                localStorage.setItem("token", tk)
                navigate("/admin/topics")
            } else {
                setShowError(true)
            }
        })
    }

    return (
        <Page title="Login">
            <div>
                <div>
                    <span className="modal-label">Username:</span>
                    <input
                        className="modal-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <span className="modal-label">Password:</span>
                    <input
                        className="modal-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {showError && <p className="login-error-message">Username or password is not correct</p>}
                <div style={{ marginTop: "20px" }}>
                    <button className="modal-btn__submit" onClick={onLogin}>
                        Login
                    </button>
                </div>
            </div>
        </Page>
    )
}

export default LoginPage
