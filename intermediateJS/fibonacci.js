//
//
//
//
//

function fibonacci(x) {
  if (x === 0 || x === 1) {
    return x;
  } else {
    return fibonacci(x - 1) + fibonacci(x - 2);
  }
}

let x = 11;
let i = 0;

while (i < x) {
  console.log(fibonacci(i));
  ++i;
}
