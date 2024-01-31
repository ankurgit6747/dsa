
function findTheMissingElement(arr) {
  const sortedArr = arr.sort()

  const max = sortedArr[sortedArr.length - 1]
  let missingElem = [];

  for (let i = 0; i < max + 1; i++) {
    if (!sortedArr.includes(i)) {
      missingElem.push(i)
    }
  }

  return missingElem;
}

console.log(findTheMissingElement([3, 1, 6, 5, 7]))