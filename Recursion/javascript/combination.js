
function factorial(num) {
  if(num === 1 || num === 0){
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

function totalCombination(num, r) {
  return ( factorial(num) / (factorial(r) * factorial(num - r)) )
}

console.log(totalCombination(5, 3))