import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"

const CategoriesPage = () => {
    const getCategories = () => {
        return [
            {
                title: "Animals",
                description: "Words related to animals",
                amount: 3,
                url: "/words/1/quiz",
            },
            {
                title: "Room",
                description: "Words related to room objects",
                amount: 2,
                url: "/words/2/quiz",
            },
            {
                title: "Food",
                description: "Words related to food",
                amount: 4,
                url: "/words/3/quiz",
            },
        ]
    }

    return (
        <div className="page-container">
            <p>Select category of words:</p>
            <div className="category-container">
                {getCategories().map((it, index) => (
                    <Link key={index} to={it.url}>
                        <div className="category">
                            <span className="category__name">{it.title}</span>
                            <span className="category__description">
                                {it.description}
                            </span>
                            <span className="category__amount">
                                {it.amount}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoriesPage
