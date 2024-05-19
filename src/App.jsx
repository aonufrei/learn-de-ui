import { QuizPage } from "./components/quiz/QuizApp"
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Navigate,
} from "react-router-dom"
import ResultsPage from "./components/pages/ResultsPage"
import TopicsPage from "./components/pages/TopicsPage"
import { AdminHeader, Header } from "./components/basic/Header"
import Footer from "./components/basic/Footer"
import NotFoundPage from "./components/pages/NotFoundPage"
import WelcomePage from "./components/pages/WelcomePage"

import LoginPage from "./components/admin/pages/login/LoginPage"
import ManageTopicsPage from "./components/admin/pages/topics/ManageTopicsPage"
import ManageWordsPage from "./components/admin/pages/words/ManageWordsPage"
import { useState } from "react"
import { AuthContext } from "./components/admin/AuthContext"

import { getToken, setToken } from "./service/AuthService"

const Application = () => {
    const [accessToken, setAccessToken] = useState(getToken())

    const onAuthorize = (token) => {
        setToken(token)
        setAccessToken(token)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<WelcomePage />} />
                    <Route path="topics" element={<TopicsPage />} />
                    <Route path="topic/:topicid/quiz" element={<QuizPage />} />
                    <Route path="quiz/results" element={<ResultsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
                <Route path="/login" element={<BaseLayout></BaseLayout>}>
                    <Route
                        index
                        element={<LoginPage onAuthorize={onAuthorize} />}
                    />
                </Route>
                <Route
                    path="/admin"
                    element={<AdminLayout accessToken={accessToken} />}
                >
                    <Route index element={<Navigate to={"/admin/topics"} />} />
                    <Route path="topics" element={<ManageTopicsPage />} />
                    <Route
                        path="topic/:topicid/words"
                        element={<ManageWordsPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function AdminLayout({ accessToken }) {
    if (!accessToken) {
        return <Navigate to="/login" />
    }

    return (
        <AuthContext.Provider value={accessToken}>
            <div className="flex flex-col justify-between min-h-dvh">
                <AdminHeader isAuthorized={!!accessToken} />
                <main className="flex-1 flex flex-col justify-between min-h-full">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </AuthContext.Provider>
    )
}

function BaseLayout() {
    return (
        <div className="flex flex-col justify-between min-h-dvh">
            <Header />
            <main className="flex-1 flex flex-col justify-between min-h-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export { Application }
