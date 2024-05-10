export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}