import "./App.css"
import { QuizProvider } from "./components/quiz/QuizApp"
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
} from "react-router-dom"
import ResultsPage from "./components/pages/responses/ResultsPage"
import TopicsPage from "./components/pages/topics/TopicsPage"
import Header from "./components/basic/Header"
import Footer from "./components/basic/Footer"
import NotFoundPage from "./components/pages/not-found/NotFoundPage"
import WelcomePage from "./components/pages/welcome/WelcomePage"

import LoginPage from "./components/admin/pages/login/LoginPage"
import ManageTopicsPage from "./components/admin/pages/topics/ManageTopicsPage"

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
                <Route path="/admin" element={<App />}>
                    <Route path="login" element={<LoginPage />}/>
                    <Route path="topics" element={<ManageTopicsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function App() {
    return (
        <div className="app__container">
            <Header />
            <Outlet />
            {/* <div className="app__main">
                
            </div> */}
            <Footer />
        </div>
    )
}

export { AppRouter }
