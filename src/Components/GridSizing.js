import React from 'react'

const GridSizing = ({ setGridRows, setGridCols }) => {

    return (
        <div className='grid-size-container'>
            <h3>Grid Sizes</h3>
            <div className='button-column'>
                <button className='size-button' onClick={() => {
                    setGridCols(50)

                }} >50x50</button>
                <button className='size-button' onClick={() => {
                    setGridCols(75)
                }} >50x75</button>
                <button className='size-button' onClick={() => {
                    setGridCols(100)
                }} >50x100</button>
            </div>

        </div>
    )
}
export default GridSizing