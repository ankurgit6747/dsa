// find the power of given number

function power(base, pwr) {
  if(pwr === 1) {
    return base
  } else {
    return power(base, pwr - 1) * base;
  }
}

console.log(power(2, 4)) // should return 16