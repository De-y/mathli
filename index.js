// Base functions for math logic
function square(num) {
  return Math.pow(num,2);
}

function cube(num) {
  return Math.pow(num,3);
}

function power(num,n) {
  return Math.pow(num,n);
}
function sqrt(num) {
  return Math.sqrt(num);
}
function print(args) {
  console.log(args);
}

// Now the actual logic

function solutions(a,b,c) {
  // Find solutions of quadratic equation (standard) in a list given a,b,c. If no real solutions, the solutions will be listed as NaN.
  var v = ((-b) + sqrt(square(b) - 4 * a * c))/(2 * a);
  var v2 = ((-b) - sqrt(square(b) - 4 * a * c))/(2 * a);
  return [v,v2];
}

// Math functions for Probability & stuff
function factorial(num) {
  if (num<0) {
    return -1;
  }
  else if (num==0) {
    return 1;
  }
  else {
    return (num * factorial(num-1))
  }
}

function combination(n,r) {
  return (factorial(n)) / factorial(r) * factorial(n-r)
}

function permutation(n,r) {
  return (factorial(n)) / factorial(n-r)
}

function slope(c1,c2) {
  const a = (c2[1] - c1[1]) / (c2[0] - c1[0])
  if (isNaN(a)) {
    return 0
  }
  else {
    return a
  }
}
// Areas
function area_of_circle(radius) {
  return Math.pi * square(radius)
}

function area_of_rectangle(a,b) {
  return a * b
}
print(slope([1,1],[1,1]))