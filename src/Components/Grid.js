import React, { useState } from 'react'
import { setUp } from '../helperFunctions/helperFunctions'
import Cell from './Cell'
import ButtonControls from './ButtonControls'
import Rules from './Rules'

let gridRows = 50
let gridCols = 70

const Grid = () => {
    const [grid, setGrid] = useState(() => {
        return setUp(gridRows, gridCols)
    })
    return (
        <>
            <div className='main-grid-container' style={{
                maxWidth: '1430px', display: 'flex'
            }}>
                <div style={{
                    backgroundColor: 'black',
                    display: 'grid',
                    gridTemplateColumns: `repeat(${gridCols}, 10px)`
                }}>
                    {grid.map((rows, i) => rows.map((cols, j) => (
                        <Cell
                            key={`${i}-${j}`}
                            grid={grid}
                            setGrid={setGrid}
                            rows={i}
                            cols={j}
                        />
                    )))}

                </div>
                <Rules />
            </div>
            <ButtonControls
                setGrid={setGrid}
                gridRows={gridRows}
                gridCols={gridCols}
            />
        </>
    )
}
export default Grid