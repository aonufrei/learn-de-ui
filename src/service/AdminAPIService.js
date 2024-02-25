const SERVER = "http://127.0.0.1:8080/api/v1"

const getAllTopics = async () => {
    const url = `${SERVER}/topics`
    const response = await fetch(url, {
        method: "GET",
    })
    if (!response.ok) {
        return undefined
    }
    return await response.json()
}

const deleteTopic = async (id, token) => {
    const url = `${SERVER}/topics/${id}`
    const response = await fetch(url, {
        method: "DELETE",
        headers: { Authorization: token },
    })
    if (!response.ok) {
        return undefined
    }
    const resp = await response.text()
    console.log(resp)
    console.log(resp === "true")
    return resp === "true"
}

const updateTopic = async (id, topic, token) => {
    const url = `${SERVER}/topics/${id}`
    const requestBody = JSON.stringify(topic)
    const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: requestBody,
    })
    if (!response.ok) {
        return undefined
    }
    return await response.json()
}

const createTopic = async (topic, token) => {
    const url = `${SERVER}/topics`
    const requestBody = JSON.stringify(topic)
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: requestBody,
    })
    if (!response.ok) {
        return undefined
    }
    return await response.json()
}

const getTopicInfoById = async (topicId, token) => {
    const url = `${SERVER}/topics/${topicId}`
    const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
    })
    if (!response.ok) {
        return undefined
    }
    return await response.json()
}

const getWordsForTopic = async (topicId) => {
    const url = `${SERVER}/topics/${topicId}/words`
    const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) {
        console.error(response)
        return undefined
    }
    return await response.json()
}

const addWordToTopic = async (topicId, word, token) => {
    const url = `${SERVER}/words`
    const requestBody = {
        topicId: topicId,
        text: word?.text || "",
        article: word?.article || 0,
        translation: word?.translation || "",
    }
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify(requestBody),
    })
    if (!response.ok) {
        console.error(response)
        return undefined
    }
    return await response.json()
}

const updateWordOfTopic = async (topicId, word, token) => {
    const url = `${SERVER}/words/${word.id}`
    const requestBody = {
        topicId: topicId,
        text: word?.text || "",
        article: word?.article || 0,
        translation: word?.translation || "",
    }
    const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify(requestBody),
    })
    if (!response.ok) {
        console.error(response)
        return undefined
    }
    return await response.json()
}

const deleteWord = async (id, token) => {
    const url = `${SERVER}/words/${id}`
    const response = await fetch(url, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Authorization: token },
    })
    if (!response.ok) {
        console.error(response)
        return undefined
    }
    return await response.json()
}

export {
    getAllTopics,
    deleteTopic,
    updateTopic,
    createTopic,
    getTopicInfoById,
    getWordsForTopic,
    addWordToTopic,
    updateWordOfTopic,
    deleteWord,
}
