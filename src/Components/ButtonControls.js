import React from 'react'
import './ButtonControls.css'
import { setUp, randomize } from '../helperFunctions/helperFunctions'

const ButtonControls = (props) => {
    let { setGrid, gridRows, gridCols, runGame, setRunGame, runRef, pressPlay, gameSpeed, setGameSpeed, setGenerations } = props

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
                    <div className='input-box'>
                        <label>Speed</label>
                        <input
                            type="number"
                            value={gameSpeed}
                            onChange={handleChange}
                        />
                    </div>

                </div>
            </div>
            <div className='button-panel' >
                <div className='button-box'>
                    <button className={runGame ? 'button stop' : 'button start'} onClick={() => {
                        setRunGame(!runGame)
                        runRef.current = true
                        pressPlay()
                    }} >{runGame ? 'Pause' : 'Start'}</button>
                    <button className='button clear' onClick={() => {
                        setGenerations(0)
                        setGrid(setUp(gridRows, gridCols))
                    }} >Clear</button>
                    <button className='button random' onClick={() => {
                        setGrid(randomize(gridRows, gridCols))
                    }}>Random</button>

                </div>
            </div>
        </>

    )
}
export default ButtonControls