export const setUp = (row, cols) => {
    let rows = []
    for (let i = 0; i < row; i++) {
        rows.push(Array(cols).fill(0))

    }
    return rows
}


export const randomize = (row, col) => {
    let rows = []
    for (let i = 0; i < row; i++) {
        rows.push(Array.from(Array(col), () => Math.random() > 0.7 ? 1 : 0));
    }
    return rows
}

export const colorGenerator = (grid, gen) => {
    let rgb1 = Math.floor(Math.random() * 256)
    let rgb2 = Math.floor(Math.random() * 256)
    let rgb3 = Math.floor(Math.random() * 256)
    if (grid && gen < 5) {
        return 'blue'
    } else if (grid && gen >= 5 && gen < 10) {
        return 'green'
    } else if (grid && gen >= 10 && gen < 15) {
        return 'orange'
    } else if (grid && gen >= 15 && gen < 20) {
        return 'purple'
    } else if (grid && gen >= 20 && gen < 35) {
        return 'red'
    } else if (grid && gen >= 35) {
        return `rgba(${rgb1}, ${rgb2}, ${rgb3})`
    } else {
        return undefined
    }
}