function factorial(num) {
  if(num < 0) {
    console.log("number should be positive")
  }

  if(num === 1) {
    return 1
  }

  if(num > 1) {
    return num * factorial(num - 1)
  }
}

//////////////////////////////

function factorial2(n) {
  let result = 1
  while(n > 0) {
    result *= n
    n--
  }
  return result
}

//////////////////////////////

function factorial3(n) {
  let result = 1;
  for(let i=1 ; i<=n ; i++) {
    result = result * i
  }
  return result
}

console.log(factorial(4))
console.log(factorial2(4))
console.log(factorial3(4))