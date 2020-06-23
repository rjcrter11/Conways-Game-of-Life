import React from 'react'

const Rules = () => {
    return (
        <div className="main-rules-container">
            <div>
                <h2>Rules</h2>
                <ol >
                    <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                    <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                    <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                    <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
                </ol>
            </div>
            <div>
                <h3>About the Game</h3>
                <p>
                    Many different types of patterns occur in the Game of Life,
                    which are classified according to their behaviour. Common pattern
                    types include: still lifes, which do not change from one generation to
                    the next; oscillators, which return to their initial state after a
                    finite number of generations; and spaceships, which translate
                    themselves across the grid.</p>
            </div>
        </div>
    )
}
export default Rules