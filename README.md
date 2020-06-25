# Conway's Game of life
 This project is my take on Conway's Game of Life, a deceptively simple simulation of an environment capable of producing great complexity with a few simple rules.

 ## About
 ### John Conway
 John Conway was an English mathematician, active in the theory of finite groups, knot theory, number theory , combinatorial game theory and coding theory. His invention of the cellular automaton (the Game of Life) is his most notable contribution. He died recently, at age 82, of complications from COVID-19. 
 ### The Game
The Game of Life is an infinite, two-dimensional grid of square cells in one of two states - alive or dead. Each cell interacts with its eight neighbors to determine its state. 
1. Any live cell with fewer than two live neighbors dies
2. Any live cell with two or three live neighbors lives to the next generation
3. Any live cell with more than three live neighbors dies
4. Any dead cell with exactly three live neighbors becomes a live cell

 ![Some Life shapes](https://www.researchgate.net/profile/Yan_Liu40/publication/274743186/figure/fig3/AS:667642776006657@1536189850143/Element-of-cellular-automata-CA-top-with-Conways-game-of-life-as-illustration.png)
 From [ResearchGate](https://www.researchgate.net/figure/Element-of-cellular-automata-CA-top-with-Conways-game-of-life-as-illustration_fig3_274743186)

The first generation is created by appllying the above rules simultaneously to every cell in the seed. Births and deaths occur simultaneously. The rules continue to be applied to create further generations. 

### Cellular Automata
A cellular automaton is a discrete model studied in automata theory. It consists of data typically stored in a 2D grid, with a simple set of rules describing how the value in a cell on the grid changes over time. 
Each round of the simulation checks the current state of the grid, then uses double buffering to create a new grid to use, swapping between the two grids to update. 
### Turing Completeness
A system of data manipulation rules is said to be Turing-complete if it can be used to simulate any Turing machine, meaning that the system is able to recognize or decide other data-manipulation rule sets. 

Theoretically, the Game of Life fits this description, as anything that can be computed algorithmically can be computed within it. 

From [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)


## Todo/Wishlist for future iterations
    - Change the implementation of generations, so that each cell can count its generations
    - Make cell sizes grow larger the more generations they have survived
    - Implement some sample configurations that can be loaded and ran
    - Add the ability to skip generations
    - Make the board more creative in aesthetic and function 
    - Fix UI bug that incorrectly sizes the board when changing its size until you click start or radomize the cells in the board 
  