import { useState } from "react"
import "./App.css"
import WordCard from "./components/quiz/WordCard"

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
    const [ended, setEnded] = useState(false)
    const [selArticle, setSelArticle] = useState(-1)
    const [wIndex, setWIndex] = useState(0)

    const [responses, setResponses] = useState([])

    const onOptionSel = (id) => {
        if (ended) return
        setSelArticle(id)
    }

    const onEnded = (isEnded) => {
        setEnded(isEnded)
    }

    const onNextWord = () => {
        console.log("h")
        setEnded(false)
        setSelArticle(-1)
        setWIndex(wIndex + 1)
        if (wIndex >= words.length) {
            setWIndex(words.length)
        }
    }

    const endGame = () => {
        console.log("Responses", responses)
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
            <p className="word-counter">{getWordsCounter()}</p>
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

export default App
