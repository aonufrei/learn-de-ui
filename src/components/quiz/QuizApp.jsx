import React, { useEffect, useState } from "react"
import "./quiz.css"
import WordCard from "./WordCard"
import { useNavigate, useParams } from "react-router-dom"

import { getWordsOfTopic } from "../../service/APIService"

const QuizProvider = () => {
    const { topicid } = useParams()
    return <QuizApp topicId={topicid} />
}

const QuizApp = ({ topicId }) => {
    const [ended, setEnded] = useState(false)
    const [selArticle, setSelArticle] = useState(-1)
    const [wIndex, setWIndex] = useState(0)
    const navigate = useNavigate()

    const [responses, setResponses] = useState([])
    const [words, setWords] = useState([])

    useEffect(() => {
        getWordsOfTopic(topicId).then((w) => {
            console.log(w)
            setWords(w)
        })
        return () => "HALLO"
    }, [])

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
        navigate("/quiz/results", {
            state: {
                responses: [...responses],
                sourceUrl: window.location.pathname,
            },
        })
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

    const onResponse = (r) => {
        setResponses([...responses, r])
    }

    return (
        <div className="quiz-container">
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
