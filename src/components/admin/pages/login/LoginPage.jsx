import React, { useState } from "react"

import Page from "../../../basic/Page"

import { login } from "../../../../service/APIService"

import { createTopic } from "../../../../service/AdminAPIService"

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")

    const onLogin = () => {
        login(username, password).then((r) => {
            if (r !== "") setToken(r)
        })
    }

    return (
        <Page title="Login">
            <div>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <button style={{ backgroundColor: "red" }} onClick={onLogin}>
                    Login
                </button>
            </div>
            <button
                style={{ backgroundColor: "red" }}
                onClick={(_) =>
                    createTopic(
                        {
                            name: "Test topic",
                            description: "This is test topic",
                        },
                        token
                    ).then((r) => console.log(r))
                }
            >
                Create Topic
            </button>
        </Page>
    )
}

export default LoginPage
