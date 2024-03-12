import { QuizProvider } from "./components/quiz/QuizApp"
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    useNavigate,
} from "react-router-dom"
import ResultsPage from "./components/pages/responses/ResultsPage"
import TopicsPage from "./components/pages/topics/TopicsPage"
import { AdminHeader, Header } from "./components/basic/Header"
import Footer from "./components/basic/Footer"
import NotFoundPage from "./components/pages/not-found/NotFoundPage"
import WelcomePage from "./components/pages/welcome/WelcomePage"

import LoginPage from "./components/admin/pages/login/LoginPage"
import ManageTopicsPage from "./components/admin/pages/topics/ManageTopicsPage"
import ManageWordsPage from "./components/admin/pages/words/ManageWordsPage"
import { useEffect, useState } from "react"

import { containsToken } from "./service/AuthService"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<WelcomePage />} />
                    <Route path="topics" element={<TopicsPage />} />
                    <Route
                        path="topic/:topicid/quiz"
                        element={<QuizProvider />}
                    />
                    <Route path="quiz/results" element={<ResultsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
                <Route path="/admin" element={<App isAdmin={true} />}>
                    <Route path="login" element={<LoginPage />} />
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

function App({ isAdmin }) {
    const navigate = useNavigate()

    useEffect(() => {
        if (isAdmin && !containsToken()) {
            navigate("/admin/login")
        }
    }, [])

    return (
        <div className="flex flex-col justify-between min-h-dvh">
            {isAdmin ? <AdminHeader isLoggedIn={containsToken()} /> : <Header />}
            <main className="flex-1 flex flex-col justify-between min-h-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export { AppRouter }
