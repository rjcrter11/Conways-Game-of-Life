export const setUp = (row, cols) => {
    let rows = []
    for (let i = 0; i < row; i++) {
        rows.push(Array(cols).fill(0))
    }
    return rows
}
