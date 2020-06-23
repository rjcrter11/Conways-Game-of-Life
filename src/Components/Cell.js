import React from 'react'
import produce from 'immer'
import { colorGenerator } from '../helperFunctions/helperFunctions'
const Cell = (props) => {
    const { grid, setGrid, rows, cols, generations } = props


    return (
        <div style={{
            width: 10,
            height: 10,
            backgroundColor: colorGenerator(grid[rows][cols], generations),
            border: 'solid 1px rgba(128, 128, 128, 0.25)'
        }}
            onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                    gridCopy[rows][cols] = grid[rows][cols] ? 0 : 1;
                })
                setGrid(newGrid)
            }}
        >
        </div>
    )
}
export default Cell