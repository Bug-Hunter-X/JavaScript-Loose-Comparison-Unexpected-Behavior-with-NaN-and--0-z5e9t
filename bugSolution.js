function foo(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true; // Handle NaN case
  } else if (Object.is(a, b)) { // Use Object.is for precise comparison
    return true; 
  } else {
    return false;
  }
}

console.log(foo(NaN, NaN)); // true
console.log(foo(0, -0));  // false
console.log(foo(0,0)); //true