const SERVER = "http://139-144-67-214.ip.linodeusercontent.com/api/v1"

const onUnauthorizedHandler = (status, onUnauthorized) => {
    if (status === 403) {
        onUnauthorized()
    }
}

export const getAllTopics = async () => {
    const url = `${SERVER}/topics`
    const response = await fetch(url, {
        method: "GET",
    })
    if (!response.ok) {
        return undefined
    }
    return await response.json()
}

export const deleteTopic = async (id, token, onUnauthorized) => {
    const url = `${SERVER}/topics/${id}`
    const response = await fetch(url, {
        method: "DELETE",
        headers: { Authorization: token },
    })
    if (!response.ok) {
        onUnauthorizedHandler(response.status, onUnauthorized)
        return undefined
    }
    const resp = await response.text()
    return resp === "true"
}

export const updateTopic = async (id, topic, token, onUnauthorized) => {
    const url = `${SERVER}/topics/${id}`
    const requestBody = JSON.stringify(topic)
    const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: requestBody,
    })
    if (!response.ok) {
        onUnauthorizedHandler(response.status, onUnauthorized)
        return undefined
    }
    return await response.json()
}

export const createTopic = async (topic, token, onUnauthorized) => {
    const url = `${SERVER}/topics`
    const requestBody = JSON.stringify(topic)
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: requestBody,
    })
    if (!response.ok) {
        onUnauthorizedHandler(response.status, onUnauthorized)
        return undefined
    }
    return await response.json()
}

export const getTopicInfoById = async (topicId, token, onUnauthorized) => {
    const url = `${SERVER}/topics/${topicId}`
    const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
    })
    if (!response.ok) {
        onUnauthorizedHandler(response.status, onUnauthorized)
        return undefined
    }
    return await response.json()
}

export const getWordsForTopic = async (topicId) => {
    const url = `${SERVER}/topics/${topicId}/words`
    const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) {
        onUnauthorizedHandler(response.status, onUnauthorized)
        return undefined
    }
    return await response.json()
}

export const addWordToTopic = async (topicId, word, token, onUnauthorized) => {
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
        onUnauthorizedHandler(response.status, onUnauthorized)
        return undefined
    }
    return await response.json()
}

export const updateWordOfTopic = async (topicId, word, token, onUnauthorized) => {
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
        onUnauthorizedHandler(response.status, onUnauthorized)
        return undefined
    }
    return await response.json()
}

export const deleteWord = async (id, token, onUnauthorized) => {
    const url = `${SERVER}/words/${id}`
    const response = await fetch(url, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Authorization: token },
    })
    if (!response.ok) {
        onUnauthorizedHandler(response.status, onUnauthorized)
        return undefined
    }
    return await response.json()
}