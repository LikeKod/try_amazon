

export function updateRaitingsQuery(
    currentRaiting: string,
    newRaiting: string
) {
    const raitingsArray = currentRaiting ? String(currentRaiting).split('|') : []

    const raitingIndex = raitingsArray.indexOf(newRaiting)

    if(raitingIndex === -1) {
        raitingsArray.push(newRaiting)
    }else{
        raitingsArray.splice(raitingIndex, 1)
    }

    return raitingsArray.join('|')
}