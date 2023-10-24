// Main

// New grid button
let newGridButton = document.querySelector('.new-grid');
newGridButton.addEventListener('click', () => {
  let squaresPerSide = prompt('How many squares per side do you want in your new grid? (MAX 100)');

  if (squaresPerSide <= 100) {
    createNewGrid(parseInt(squaresPerSide));
  } else {
    alert("Values above 100 aren't allowed! Please enter a valid number!");
  }
});

// Default grid
createNewGrid(16);

// Functions
function createNewGrid(squaresPerSide) {
  let gridContainer = document.querySelector('.grid-container');

  if (gridContainer.lastChild) {
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.lastChild);
    }
  }

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.height = 100 / squaresPerSide + "%";
    square.style.width = 100 / squaresPerSide + "%";

    // Cloning square in order to be able to reiterate with for {}: without clonation it would stop at second iteration (.appendChild() removes the contenttent of the appended node)
    let clonedSquare = square;
    let lightness = 100;
    clonedSquare.addEventListener('mouseover', (event) => {
      if (lightness > 0) {
        lightness = lightness - 10;
        event.currentTarget.style.background = "hsl(0, 0%, " + lightness + "%)";
      }
    });

    gridContainer.appendChild(clonedSquare);
  }
}
