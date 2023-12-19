import { useState } from "react"
import "./App.css"
import QuizApp from "./components/quiz/QuizApp"

const words = [
    {
        word: "Katze",
        final: "Die Katze",
        correct: 1,
        translation: "The cat",
    },
    {
        word: "Hund",
        final: "Der Hund",
        correct: 0,
        translation: "The dog",
    },
]

function App() {
    return (
        <div className="app-page">
            <QuizApp words={words} />
        </div>
    )
}

export default App
