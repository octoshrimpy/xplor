
// Returns a random value from an array
function sample(arr) {
  return arr[rand(arr.length)]
}

// Returns a random value.
// If no args are given, returns a random float between 0,1
// If one arg is given, returns an integer between 0,arg inclusive
// If two args are given, returns an integer between min,max inclusive
function rand(min, max) {
  if (!min && !max) { return Math.random() }
  if (!max) {
    max = min
    min = 0
  } else {
    max += 1
  }

  return Math.floor(rand() * (max - min) + min)
}


let cells = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
]


let rules = {

}

let randCells = [[0,0],[0,0],[0,0]]

console.log(`finding for ${cells[0].length}, ${cells.length}`)

for (let cell of randCells) {
  cell[0] = rand(cells[0].length + 1)
  cell[1] = rand(cells.length + 1)
}

console.log(randCells)