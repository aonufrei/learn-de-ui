import { capitalize } from "./utils"

const SERVER = "http://127.0.0.1:8080/api/v1"

function determineArticle(id) {
    const a = {
        0: "der",
        1: "die",
        2: "das",
    }
    const res = a[id]
    if (res === undefined) {
        throw new Error("Article was not detected")
    }
    return res
}

async function getWordsOfTopic(topicId) {
    console.log(`Get words for topic ${topicId}`)
    const url = `${SERVER}/topics/${topicId}/words`
    const response = await fetch(url, { method: "GET" })
    if (!response.ok) {
        return []
    } 
    let data = await response.json()
    data = data.map((d) => ({
        ...d,
        correct: d.article,
        final: capitalize(`${determineArticle(d.article)} ${d.word}`),
    }))
    return data
}

async function getAllTopics() {
    console.log(`Get all topics`)
    const url = `${SERVER}/topics`
    const response = await fetch(url, { method: "GET" })
    if (!response.ok) {
        return []
    }
    return await response.json()
}

export { SERVER, getWordsOfTopic, determineArticle, getAllTopics }
