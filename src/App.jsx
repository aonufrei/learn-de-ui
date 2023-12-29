import "./App.css"
import { QuizProvider } from "./components/quiz/QuizApp"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ResultsPage from "./components/pages/responses/ResultsPage"
import TopicsPage from "./components/pages/topics/TopicsPage"

import Container from "react-bootstrap/Container"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Header from "./components/Header/Header"
import { Stack } from "react-bootstrap"

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
        <Stack className="px-0" fluid data-bs-theme="dark">
            <Header title={"Learn De Articles!"} />
            <RouterProvider router={router} />
        </Stack>
    )
}

export default App
