import React from 'react'
import produce from 'immer'
import { colorGenerator } from '../helperFunctions/helperFunctions'

const Cell = (props) => {
    const { grid, setGrid, rows, cols, generations, runGame } = props

    return (
        // div for base grid cells
        <div style={{
            width: 10,
            height: 10,
            backgroundColor: 'black',
            border: 'solid 1px rgba(128, 128, 128, 0.25)',
        }}
            // immer produce to pass current grid value and return an altered copy
            onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                    if (runGame) {
                        return // to disable cells when game is running
                    }
                    gridCopy[rows][cols] = grid[rows][cols] ? 0 : 1;
                })
                setGrid(newGrid)
            }}
        // div for circular living cells 
        >
            <div style={{
                width: 9,
                height: 9,
                backgroundColor: colorGenerator(grid[rows][cols], generations),
                borderRadius: '100%',
            }}>
            </div>
        </div>
    )
}
export default Cell