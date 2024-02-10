const SERVER = "http://127.0.0.1:8080/api/v1"

const createTopic = async (topic, token) => {
    const url = `${SERVER}/topics`
    const requestBody = JSON.stringify(topic)
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": token },
        body: requestBody,
    })
    if (!response.ok) {
        return undefined
    }
    return await response.text()
}

export {createTopic}
