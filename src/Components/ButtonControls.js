import React from 'react'
import { setUp } from '../helperFunctions/helperFunctions'
const ButtonControls = (props) => {
    let { setGrid, gridRows, gridCols } = props
    return (
        <div>
            <button>Start</button>
            <button onClick={() => {
                setGrid(setUp(gridRows, gridCols))
            }} >Clear</button>
            <button>Random</button>
        </div>
    )
}
export default ButtonControls