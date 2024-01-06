import "./App.css"
import { QuizProvider } from "./components/quiz/QuizApp"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ResultsPage from "./components/pages/responses/ResultsPage"
import TopicsPage from "./components/pages/topics/TopicsPage"
import Page from "./components/Basic/Page"
import Header from "./components/Basic/Header"
import Footer from "./components/Basic/Footer"

const router = createBrowserRouter([
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
])

function App() {
    return (
        <div className="top-and-bottom-layouts">
            <>
                <Header />
                <Page>
                    <RouterProvider router={router} />
                </Page>
            </>
            <Footer />
        </div>
    )
}

export default App
