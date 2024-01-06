import "./App.css"
import { QuizProvider } from "./components/quiz/QuizApp"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ResultsPage from "./components/pages/responses/ResultsPage"
import TopicsPage from "./components/pages/topics/TopicsPage"
import Page from "./components/Basic/Page"
import Header from "./components/Basic/Header"
import Footer from "./components/Basic/Footer"
import NotFoundPage from "./components/pages/not-found/NotFoundPage"
import WelcomePage from "./components/pages/welcome/WelcomePage"

const router = createBrowserRouter([
    {
        path: "/home",
        element: <WelcomePage />,
    },
    {
        path: "/words",
        element: <TopicsPage />,
    },
    {
        path: "/words/:topicid/quiz",
        element: <QuizProvider />,
    },
    {
        path: "/quiz/results",
        element: <ResultsPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
])

function App() {
    return (
        <div className="app__container">
            <div className="app__main">
                <Header />
                <RouterProvider router={router} />
            </div>
            <Footer />
        </div>
    )
}

export default App
