import React, { useState, useRef, useCallback } from 'react'
import produce from 'immer'
import { setUp, possibleNeighbors } from '../helperFunctions/helperFunctions'
import './Grid.css'
import Cell from './Cell'
import ButtonControls from './ButtonControls'
import Rules from './Rules'
import GridSizing from './GridSizing'



const Grid = () => {
    const [runGame, setRunGame] = useState(false)
    const [generations, setGenerations] = useState(0)
    const [gameSpeed, setGameSpeed] = useState(500)
    const [gridRows, setGridRows] = useState(50)
    const [gridCols, setGridCols] = useState(50)
    // init state in a function, to ensure it only runs once on 
    // state initialization
    const [grid, setGrid] = useState(() => {
        return setUp(gridRows, gridCols)
    })

    // useRef so pressPlay function stays in sync with value of runGame
    const runRef = useRef(runGame)
    runRef.current = runGame




    // useCallback to keep pressplay from being recreated every render
    const pressPlay = useCallback(() => {
        if (!runRef.current) {
            return
        }
        // setGrid takes a function, g is current value, 
        // & it will return a new one w/ the produce function
        setGrid(g => {
            return produce(g, gridCopy => {
                for (let i = 0; i < gridRows; i++) {
                    for (let j = 0; j < gridCols; j++) { // nested for loop to go through every value in the grid
                        let neighbors = 0;
                        // compute number of neighbors
                        possibleNeighbors.forEach(([x, y]) => { // array of [i][j] values
                            const nextI = (i + x + gridRows) % gridRows; // modulus to wrap cells around the grid
                            const nextJ = (j + y + gridCols) % gridCols;
                            if (nextI >= 0 && nextI < gridRows && nextJ >= 0 && nextJ < gridCols) { // check bounds of each against # of rows and cols
                                neighbors += g[nextI][nextJ] // if it's live, its value is 1, which will be added to neighbors
                            }
                        })
                        // Rules:
                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[i][j] = 0
                        } else if (g[i][j] === 0 && neighbors === 3) {
                            gridCopy[i][j] = 1
                        }
                    }
                }
            })
        })
        setGenerations(g => g + 1)
        setTimeout(pressPlay, gameSpeed)
    }, [gameSpeed, gridCols, gridRows])

    // set div's display to grid
    const colStyle = {
        backgroundColor: 'black',
        display: 'grid',
        gridTemplateColumns: `repeat(${gridCols}, 10px)`,
        gridRowGap: 0
    }

    return (
        <>
            <div className='main-grid-container'>
                <GridSizing
                    setGridRows={setGridRows}
                    setGridCols={setGridCols}
                />
                <div style={colStyle}>
                    {grid.map((rows, i) => rows.map((cols, j) => ( // map grid and rows
                        <Cell
                            key={`${i}-${j}`}
                            grid={grid}
                            setGrid={setGrid}
                            rows={i}
                            cols={j}
                            runRef={runRef}
                            generations={generations}
                            runGame={runGame}
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

