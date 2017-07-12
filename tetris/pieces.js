
const pieces = [
  // I
  [ {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0} ],
  // J
  [ {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 0, y: 1} ],
  // L
  [ {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 2, y: 1} ],
  // O
  [ {x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1} ],
  // S
  [ {x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 2, y: 1} ],
  // T
  [ {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 1, y: 1} ],
  // Z
  [ {x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 0}, {x: 2, y: 0} ]
]

export function getRandomPiece () {
  const r = Math.floor(Math.random() * pieces.length)
  return pieces[r]
}