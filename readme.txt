Sudoku Assignment


Sudoku is a logic puzzle played on a 9 x 9 square grid that is also viewed nine 3 x 3 regions. The usual layout of the grid is illustrated below. The puzzle starts with some cells filled in. The objective is to fill in the remaining cells so that each row, each column, and each of the outlined 3 x 3 blocks contain a permutation of the numbers 1 through 9. A more detailed description of the puzzle can be found in the Wikipedia article on Sudoku. A Google search will provide many additional links on the subject.

You are not required to provide a solution for the Sodoku game, or even know how to play Sudoku to do this assignment. You only need to understand the basic rules as described above, and provide a prototype that enables input and result checking.

You can implement the prototype system using your preferred design style and development approach as far as it fulfils the essential requirements as follows:

A table-less three column style layout using CSS; (Bonus point: choose and apply a CSS grid framework in your design)
A Sudoku game implementation using Javascript and DOM;
A choice of presentation style changes to improve web accessibility using Javascript and CSS;
Here is an example to develop your demonstration web pages. The homepage features a table-less three-column style with a top header, a left, a central, a right column, and a footer with:-

The header shows the overall title of the project.
The footer shows the current date and time and last modified information etc.
The left column contains a listed menu to give the user a choice of three difficulty levels: easy, medium, and hard. (A typical set of puzzle and solution is provided below)
The right column contains a list of buttons to enable switching between different styles for different types of users, e.g. big font, high contrast, etc.
The central column shows a 9x9 grid for the Sudoku game. When a selection is made on the left column, a puzzle (i.e. the initial configuration) as well as a solution will be loaded into memory. When the user left clicks in a cell, the cell is "selected." If the user types a digit 1 through 9, the digit is written into the cell. If the user types a 0 the cell is erased. There is to be a "Check" button that will report whether the number entered in the selected cell is the correct value for the solution. Present an alert window with a message indication whether it is correct or not. A "Reset" button reloads the initial configuration for the selected puzzle.
Puzzles and solutions: The data for a puzzle is a text string consisting of two lines of 81 digits each. The first line is the initial configuration with a zero indicating an empty cell. The second line contains the solution. The following codes are to be used in your program. (Note: you are not asked to solve the puzzle in your program)

Easy: 306500090200400851100780060009368500628000349005924100040097002863001005070003408 386512794297436851154789263419368527628175349735924186541897632863241975972653418

Normal: 800000310000517000090000250700308001400000006300201005073000040000896000018000002 865429317234517689197683254759368421421975836386241795673152948542896173918734562

Hard: 080000001900276000050000029009800200001409800006005300730000060000938002200000040 682594731913276485457381629549863217371429856826715394735142968164938572298657143

The documentation that you hand in must include:

Design and Implementation: textual descriptions of how all aspects of the system have been implemented (including screen shots);
Discussions of the implications of using web technologies in modern website development such as CSS (including CSS grid frameworks if applicable), Javascript and DOM, and accessibility assessment.
Evaluate the accessibility and standard compliance of your own prototype system.
Printout of CSS and Javascript source codes
