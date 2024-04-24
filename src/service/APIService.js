import { capitalize } from "./utils"

export const SERVER = "http://139-144-67-214.ip.linodeusercontent.com/api/v1"

export function determineArticle(id) {
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

export async function getWordsOfTopic(topicId) {
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

export async function getAllTopics() {
    console.log(`Get all topics`)
    const url = `${SERVER}/topics`
    const response = await fetch(url, { method: "GET" })
    if (!response.ok) {
        return []
    }
    return await response.json()
}

export async function login(username, password) {
    console.log("Send login request")
    const url = `${SERVER}/auth/login`
    const requestBody = JSON.stringify({username: username, password: password})
    const response = await fetch(url, {method: "POST", headers: { "Content-Type": "application/json"}, body: requestBody})
    if (!response.ok) {
        return undefined
    }
    return await response.text()
}