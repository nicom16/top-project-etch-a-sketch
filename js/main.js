// Main

// Grid 
let gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 16 * 16; i++) {
  let square = document.createElement('div');
  square.classList.add('square');

  // Cloning square in order to be able to reiterate with for {}: without clonation it would stop at second iteration (.appendChild() removes the contenttent of the appended node)
  let clonedSquare = square;

  clonedSquare.addEventListener('mouseover', (event) => {
    event.currentTarget.style.background = "black";
  });

  gridContainer.appendChild(clonedSquare);
}
