import React from "react"

import { determineArticle } from "../../service/APIService"
import { capitalize } from "../../service/utils"

const WordCard = ({
    wordNumber,
    wordsAmount,
    word,
    ended,
    article,
    onOptionSel,
    onEnded,
    onResponse,
}) => {
    const createFinal = (word) =>
        `${capitalize(determineArticle(word.article))} ${capitalize(word.text)}`

    const onArticleSelected = (selectedArticle) => {
        if (ended) {
            return
        }
        onResponse({
            final: createFinal(word),
            translation: word.translation,
            expected: word.article,
            actual: selectedArticle,
        })
        onOptionSel(selectedArticle)
        onEnded(true)
    }

    const getAddBtnStyle = (id) => {
        if (!ended) return " bg-clactive hover:bg-clactivehover"
        if (word.article === id) {
            return " bg-clsuccess hover:bg-clsuccess"
        }
        if (article === id) {
            return " bg-clfailure hover:bg-clfailure"
        }
        return " bg-clactive hover:bg-clactive"
    }

    return (
        <div className="min-h-[70dvh] max-h-[75dvh] aspect-[5/7] bg-clfore rounded-2xl px-5 py-5 flex flex-col justify-between items-center">
            <div className="w-full px-2.5 flex justify-end items-end">
                <span className="text-clfont2 font-bold">
                    {wordNumber}/{wordsAmount}
                </span>
            </div>
            <div>
                <p className="text-center text-clfont text-5xl font-bold m-0 p-0 [text-shadow:_var(--shadow-color)_0px_4px_10px]">
                    {ended ? createFinal(word) : word.text}
                </p>
                {ended && (
                    <p className="text-center text-clfont text-4xl m-0 mt-3 p-0">
                        {word.translation}
                    </p>
                )}
            </div>

            <div className="w-full">
                <p className="m-0 p-0 mb-1.5 text-clfont text-lg text-left">
                    Select correct article:
                </p>
                <div className="w-full grid gap-x-1 grid-cols-3">
                    <button
                        className={`outline-none text-lg py-2 px-4 transition-all duration-300 ${getAddBtnStyle(
                            0
                        )}`}
                        onClick={(_) => onArticleSelected(0)}
                    >
                        Der
                    </button>
                    <button
                        className={`outline-none text-lg py-2 px-4 transition-all duration-300 ${getAddBtnStyle(
                            1
                        )}`}
                        onClick={(_) => onArticleSelected(1)}
                    >
                        Die
                    </button>
                    <button
                        className={`outline-none text-lg py-2 px-4 transition-all duration-300 ${getAddBtnStyle(
                            2
                        )}`}
                        onClick={(_) => onArticleSelected(2)}
                    >
                        Das
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WordCard
