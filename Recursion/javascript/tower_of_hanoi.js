// url to demonstrate: http://towersofhanoi.info/Animate.aspx

function toh(n, from_bar, to_bar, aux_bar){
  if(n === 1){
    console.log(`Move ${n} disk from bar ${from_bar} to bar ${to_bar}`)
    return
  }
  toh(n-1, from_bar, aux_bar, to_bar)
  console.log(`Move disk  ${n} rom bar ${from_bar} to bar ${to_bar} `)
  toh(n-1, aux_bar, to_bar, from_bar)
}

let n = 4;
from_bar = 'A'
aux_bar = 'B'
to_bar = 'C'

toh(n, from_bar, to_bar, aux_bar)