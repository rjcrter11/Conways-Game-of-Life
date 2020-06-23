import React from 'react'
import './ButtonControls.css'
import { setUp, randomize } from '../helperFunctions/helperFunctions'

const ButtonControls = (props) => {
    let { setGrid, gridRows, gridCols, runGame, setRunGame, runRef, pressPlay, gameSpeed, setGameSpeed } = props

    const handleChange = (e) => {
        e.preventDefault()
        setGameSpeed(e.target.value)
    }

    return (
        <div className='button1'>
            <div className='button-container'>
                <div className='gen-box'>
                    <h3>Generations: {props.generations}</h3>
                </div>
                <div className='button-box'>
                    <button className='button' onClick={() => {
                        setRunGame(!runGame)
                        runRef.current = true
                        pressPlay()

                    }} >{runGame ? 'Stop' : 'Start'}</button>
                    <button className='button' onClick={() => {
                        setGrid(setUp(gridRows, gridCols))

                    }} >Clear</button>
                    <button className='button' onClick={() => {
                        setGrid(randomize(gridRows, gridCols))
                    }}>Random</button>
                </div>
                <div className='input-box'>
                    <label>Choose Speed</label>
                    <input
                        type="number"
                        value={gameSpeed}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}
export default ButtonControls