const SERVER = 'http://127.0.0.1:3000'

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

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


async function getWords(topicId) {
    const url = `${SERVER}/topics/${topicId}/words`
    const response = await fetch(url, {method: 'GET'})
    let data = await response.json()
    data = data.map(d => ({...d, correct: d.article, final: capitalize(`${determineArticle(d.article)} ${d.word}`)}))
    
    console.log(data)
    return data
}



export {SERVER, getWords, determineArticle}