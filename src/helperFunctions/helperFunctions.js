
// Initializes blank grid (all zeros)
export const setUp = (row, cols) => {
    let rows = []
    for (let i = 0; i < row; i++) {
        rows.push(Array(cols).fill(0))
    }
    return rows

}

// Initializes grid with random live cells 
export const randomize = (row, col) => {
    let rows = []
    for (let i = 0; i < row; i++) {
        rows.push(Array.from(Array(col), () => Math.random() > 0.875 ? 1 : 0));
    }
    return rows
}

// export const pattern = (row, col) => {
//     let rows = []
//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < col; j++) {
//             if (col[j] === 25 && row[i] === 25) {
//                 rows.push(Array(col).fill(1))
//                 console.log(col)
//             } else {
//                 rows.push(Array(col).fill(0))
//             }
//         }
//     }

//     return rows
// }

// Changes cell color depending on generation
export const colorGenerator = (grid, gen) => {
    let rgb1 = Math.floor(Math.random() * 256)
    let rgb2 = Math.floor(Math.random() * 256)
    let rgb3 = Math.floor(Math.random() * 256)
    if (grid && gen < 5) {
        return 'rgb(248, 16, 16)'
    } else if (grid && gen >= 5 && gen < 10) {
        return 'rgba(247, 167, 48, 0.92)'
    } else if (grid && gen >= 10 && gen < 15) {
        return 'rgba(237, 247, 48, 0.87)'
    } else if (grid && gen >= 15 && gen < 20) {
        return 'rgba(61, 247, 48, 0.82)'
    } else if (grid && gen >= 20 && gen < 30) {
        return 'rgba(112, 2, 222, 0.78)'
    } else if (grid && gen >= 30 && gen < 35) {
        return 'rgba(211, 2, 222, 0.7)'
    } else if (grid && gen >= 35) {
        return `rgba(${rgb1}, ${rgb2}, ${rgb3})`
    } else {
        return undefined
    }
}

// Neighbors list 
export const possibleNeighbors = [
    [0, 1],
    [0, -1],
    [1, 0],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
];