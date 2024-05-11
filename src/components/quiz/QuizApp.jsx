import React, { useEffect, useState } from "react"
import WordCard from "./WordCard"
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"

import { getShuffledWordsOfTopic } from "../../service/APIService"

const QuizProvider = () => {
    const { topicid } = useParams()
    const location = useLocation()
    const params = new URLSearchParams(location.search);
    return <QuizApp topicId={topicid} seed={params.get('seed')} qe={parseInt(params.get('qe'))} />
}

const QuizApp = ({ topicId, seed, qe }) => {
    const [ended, setEnded] = useState(false)
    const [selArticle, setSelArticle] = useState(-1)
    const navigate = useNavigate()
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()

    const [responses, setResponses] = useState([])
    const [words, setWords] = useState([])

    useEffect(() => {
        getShuffledWordsOfTopic(topicId, seed).then((w) => {
            setWords(w)
        })
        return () => ""
    }, [topicId, seed])

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
        if (qe >= words.length) {
            return
        }
        setSearchParams({seed: seed, qe: qe + 1})
    }

    const endGame = () => {
        navigate("/quiz/results", {
            state: {
                responses: [...responses],
                retryUrl: `${location.pathname}?seed=${seed}&qe=0`,
            },
        })
    }

    const isLastWord = () => {
        return qe === words.length - 1
    }

    const onResponse = (r) => {
        setResponses([...responses, r])
    }

    if (words.length === 0) return (<>No words in the topic</>)

    return (
        <div className="mt-0 sm:mt-7 sm:p-1 flex justify-center items-center flex-col">
            <WordCard
                wordNumber={qe + 1}
                wordsAmount={words.length}
                word={words[qe]}
                ended={ended}
                article={selArticle}
                onOptionSel={onOptionSel}
                onEnded={onEnded}
                onResponse={onResponse}
            />
            <button
                className={`block bg-clsuccess text-xl font-semibold py-5 px-10 mt-10 ${!ended ? "invisible" : "visible"}`}
                onClick={(_) => (isLastWord() ? endGame() : onNextWord())}
            >
                {isLastWord() ? "End Quiz" : "Next Word"}
            </button>
        </div>
    )
}

export { QuizApp, QuizProvider }
