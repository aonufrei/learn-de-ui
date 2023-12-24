import "./App.css"
import { QuizProvider } from "./components/quiz/QuizApp"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ResultsPage from "./components/quiz/ResultsPage"
import CategoriesPage from "./components/words/CategoriesPage"

const router = createBrowserRouter([
    {
        path: "/words",
        element: <CategoriesPage />,
    },
    {
        path: "/words/:packid/quiz",
        element: <QuizProvider />,
    },
    {
        path: "/quiz/results",
        element: <ResultsPage />,
    },
])

function App() {
    return (
        <div>
            <header className="app-header">
                <span className="app-header__logo">Learn De articles!</span>
            </header>
            <RouterProvider router={router} />
            {/* <QuizApp words={words} /> */}
        </div>
    )
}

export default App
