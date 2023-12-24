import React, { useState } from "react"
import "./quiz.css"
import WordCard from "./WordCard"
import { useNavigate, useParams } from "react-router-dom"


const pack1 = [
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


const pack2 = [
    {
        word: "Tisch",
        final: "Der Tisch",
        correct: 0,
        translation: "The table",
    },
    {
        word: "Stuhl",
        final: "Der Stuhl",
        correct: 0,
        translation: "The chair",
    },
]


const pack3 = [
    {
        word: "Kässe",
        final: "Der Kässe",
        correct: 0,
        translation: "The cheese",
    },
    {
        word: "Kartofel",
        final: "Die Kartofel",
        correct: 1,
        translation: "The potatoe",
    },
]

const packSelect = {
    1: pack1,
    2: pack2,
    3: pack3,
}

const QuizProvider = () => {
    const { packid } = useParams()
    return <QuizApp words={packSelect[parseInt(packid)]} />
}

const QuizApp = ({ words }) => {
    const [ended, setEnded] = useState(false)
    const [selArticle, setSelArticle] = useState(-1)
    const [wIndex, setWIndex] = useState(0)
    const navigate = useNavigate()

    const [responses, setResponses] = useState([])

    const onOptionSel = (id) => {
        if (ended) return
        setSelArticle(id)
    }

    const onEnded = (isEnded) => {
        setEnded(isEnded)
    }

    const onNextWord = () => {
        setEnded(false)
        setSelArticle(-1)
        setWIndex(wIndex + 1)
        if (wIndex >= words.length) {
            setWIndex(words.length)
        }
    }

    const endGame = () => {
        navigate("/quiz/results")
    }

    const getWordsCounter = () => {
        if (wIndex >= words.length) {
            return "Finished"
        }
        return `${wIndex + 1}/${words.length}`
    }

    const isLastWord = () => {
        return wIndex === words.length - 1
    }

    const onResponse = (word, correct, actual) => {
        setResponses([...responses, { word, correct, actual }])
    }

    return (
        <div className="app-page">
            <WordCard
                {...words[wIndex]}
                ended={ended}
                article={selArticle}
                onOptionSel={onOptionSel}
                onEnded={onEnded}
                onResponse={onResponse}
            />
            <div style={{ display: ended ? "block" : "none" }}>
                <button
                    className="next-word__button"
                    onClick={(_) => (isLastWord() ? endGame() : onNextWord())}
                >
                    {isLastWord() ? "End Quiz" : "Next Word"}
                </button>
            </div>
        </div>
    )
}

export { QuizApp, QuizProvider }
