// Show/hide the hint
const hintButton = document.querySelector('#show-hint');
const hint = document.querySelector('.hint');

hintButton.addEventListener('click', (event) => {
  hint.classList.toggle('active');
});

// Game
// 1. Select all the tiles
// 2. For each tile
// 3. Listen to a click event
// 4. If there is an empty neighbor
// 5. Move the tile and empty the space
// 6. Check if the player wins

const tiles = Array.from(document.querySelectorAll('td'));

const canMove = (tile) => {
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  const emptyTile = document.querySelector('.empty');
  const emptyTileColumn = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;

  return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
         (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
         (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) ||
         (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1);
};

const moveTile = (tile) => {
  // 1. Select empty tile
  // 2. Replace its content with the content of the tile I clicked
  // 3. Remove the empty class
  // 4. Add empty class to the element I clicked
  // 5. Empty the content of the element I clicked
  const emptyTile = document.querySelector('.empty');
  emptyTile.innerHTML = tile.innerHTML;
  emptyTile.classList.remove('empty');
  tile.classList.add('empty');
  tile.innerHTML = '';
}

const checkIfPlayerWins = () => {
  const tilesOrder = tiles.map((tile) => tile.innerText);
  if (tilesOrder.join() === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,') {
    alert('You won!');
    window.location.reload();
  }
}

tiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {
    if (canMove(tile)) {
      moveTile(tile);
      checkIfPlayerWins();
    }
  });
});
