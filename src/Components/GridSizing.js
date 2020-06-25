import React from 'react'

const GridSizing = ({ setGridCols }) => {

    return (
        <div className='grid-size-container'>
            <h3>Grid Sizes</h3>
            <div className='button-column'>
                <button className='size-button' onClick={() => {
                    setGridCols(50)
                }} >Small</button>
                <button className='size-button' onClick={() => {
                    setGridCols(75)
                }} >Medium</button>
                <button className='size-button' onClick={() => {
                    setGridCols(100)
                }} >Large</button>
            </div>
        </div>
    )
}
export default GridSizing