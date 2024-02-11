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
    const url = `${SERVER}/topics`
    const response = await fetch(url, {
        method: "DELETE",
        headers: { Authorization: token },
    })
    if (!response.ok) {
        return undefined
    }
    return await response.text()
}

const updateTopic = async (id, topic, token) => {
    const url = `${SERVER}/topics`
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

export { getAllTopics, deleteTopic, updateTopic, createTopic }
