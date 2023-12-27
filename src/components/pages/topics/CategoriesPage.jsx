import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./styles.css"
import { SERVER } from "../../../service/words"

const CategoriesPage = () => {
    const [categories, setCategories] = useState([])

    const fetchCategories = () => {
        
        fetch(SERVER)
        .then(r => r.json())
        .then(r => {
            r.shift()
            const data = r.map(o => ({...o, url: `/words/${o.id}/quiz`}))
            data.sort((f, s) => (f.name > s.name) ? 1 : -1)
            localStorage.setItem('wordsCategories', JSON.stringify(r))
            setCategories(data)
        }).catch(err => {
            console.log("Failed to get categories: ", err)
        })
    }

    useEffect(() => {
        let pageLoaded = false;
        if (!pageLoaded) fetchCategories()
        return () => { pageLoaded = true; }
    }, [])

    return (
        <div className="page-container">
            <p>Select category of words:</p>
            <div className="category-container">
                {categories.map((it, index) => (
                    <Link key={index} to={it.url}>
                        <div className="category">
                            <span className="category__name">{it.name}</span>
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
            <div style={{height: '300px'}}></div>
        </div>
    )
}

export default CategoriesPage
