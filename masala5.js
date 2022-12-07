

export function nn(k) {
    let push = Math.floor(k.length/2)

    return [k[push-1], k[push], k[push+1]]
}


