import React from 'react'
import produce from 'immer'
import { colorGenerator } from '../helperFunctions/helperFunctions'

const Cell = (props) => {
    const { grid, setGrid, rows, cols, generations, runGame } = props


    return (
        <div style={{
            width: 10,
            height: 10,
            backgroundColor: 'black',
            border: 'solid 1px rgba(128, 128, 128, 0.25)',
        }}
            onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                    if (runGame) {
                        return
                    }
                    gridCopy[rows][cols] = grid[rows][cols] ? 0 : 1;
                })
                setGrid(newGrid)

            }}
        >
            <div style={{
                width: 9,
                height: 9,
                backgroundColor: colorGenerator(grid[rows][cols], generations),
                borderRadius: '100%',
            }} ></div>
        </div>
    )
}
export default Cell