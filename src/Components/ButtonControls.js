import React from 'react'
import './ButtonControls.css'
import { setUp, randomize } from '../helperFunctions/helperFunctions'

const ButtonControls = (props) => {
    const { setGrid, gridRows, gridCols, runGame, setRunGame, runRef, pressPlay, gameSpeed, setGameSpeed, setGenerations } = props

    const handleChange = (e) => {
        e.preventDefault()
        setGameSpeed(e.target.value)
    }

    return (
        <>
            <div className='control-panel'>
                <div className='button-container'>
                    <div className='gen-box'>
                        <h3>Generations: {props.generations}</h3>
                    </div>
                    <div className='dropdown' >
                        <label>
                            Playback Speed
                            <select value={gameSpeed} onChange={handleChange} >
                                <option value={1000} >Slow</option>
                                <option value={500}>Normal</option>
                                <option value={100}>Fast</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
            <div className='button-panel' >
                <div className='button-box'>
                    <button
                        className={runGame ? 'button stop' : 'button start'}
                        onClick={() => {
                            setRunGame(!runGame)
                            if (!runGame) {
                                runRef.current = true
                                pressPlay()
                            }
                        }}
                    >{runGame ? 'Pause' : 'Start'}
                    </button>
                    <button
                        className='button clear'
                        onClick={() => {
                            setGenerations(0)
                            setGrid(setUp(gridRows, gridCols))
                        }}>Clear
                    </button>
                    <button
                        className='button random'
                        onClick={() => {
                            setGrid(randomize(gridRows, gridCols))
                        }}>Random
                    </button>
                </div>
            </div>
        </>
    )
}
export default ButtonControls