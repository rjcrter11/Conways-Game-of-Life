import React, { useState, useRef, useCallback } from 'react'
import { setUp } from '../helperFunctions/helperFunctions'
import './Grid.css'
import Cell from './Cell'
import ButtonControls from './ButtonControls'
import Rules from './Rules'
import produce from 'immer'
import GridSizing from './GridSizing'



const possibleNeighbors = [
    [0, 1],
    [0, -1],
    [1, 0],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
];

let genCount = 0;

const Grid = () => {
    const [runGame, setRunGame] = useState(false)
    const [generations, setGenerations] = useState(0)
    const [gameSpeed, setGameSpeed] = useState(500)
    const [gridRows, setGridRows] = useState(50)
    const [gridCols, setGridCols] = useState(75)
    const [grid, setGrid] = useState(() => {
        return setUp(gridRows, gridCols)
    })

    const runRef = useRef()
    runRef.current = runGame

    const pressPlay = useCallback(() => {
        if (!runRef.current) {
            genCount = 0
            return
        }
        setGrid(g => {
            return produce(g, gridCopy => {
                for (let i = 0; i < gridRows; i++) {
                    for (let j = 0; j < gridCols; j++) {
                        let neighbors = 0;
                        possibleNeighbors.forEach(([x, y]) => {
                            const nextI = (i + x + gridRows) % gridRows;
                            const nextJ = (j + y + gridCols) % gridCols;
                            if (nextI >= 0 && nextI < gridRows && nextJ >= 0 && nextJ < gridCols) {
                                neighbors += g[nextI][nextJ]
                            }
                        })
                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[i][j] = 0
                        } else if (g[i][j] === 0 && neighbors === 3) {
                            gridCopy[i][j] = 1
                        }
                    }
                }
            })
        })
        setTimeout(pressPlay, gameSpeed, genCount++)
        setGenerations(genCount)
    }, [gameSpeed, gridCols, gridRows])

    return (
        <>
            <div className='main-grid-container'>
                <GridSizing
                    setGridRows={setGridRows}
                    setGridCols={setGridCols}
                />
                <div style={{
                    backgroundColor: 'black',
                    display: 'grid',
                    gridTemplateColumns: `repeat(${gridCols}, 10px)`,
                    gridRowGap: 0,
                }}>
                    {grid.map((rows, i) => rows.map((cols, j) => (
                        <Cell
                            key={`${i}-${j}`}
                            grid={grid}
                            setGrid={setGrid}
                            rows={i}
                            cols={j}
                            runRef={runRef}
                            generations={generations}
                        />
                    )))}
                </div>
                <Rules />
            </div>
            <ButtonControls
                setGrid={setGrid}
                gridRows={gridRows}
                gridCols={gridCols}
                pressPlay={pressPlay}
                runRef={runRef}
                runGame={runGame}
                setRunGame={setRunGame}
                generations={generations}
                setGenerations={setGenerations}
                gameSpeed={gameSpeed}
                setGameSpeed={setGameSpeed}
            />
        </>
    )
}
export default Grid