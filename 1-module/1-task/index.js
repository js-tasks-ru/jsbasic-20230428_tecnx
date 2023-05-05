function factorial(n) {
  if (n === 0) {
    n = 1;
  } else if (n > 0) {

    for (let i = n - 1; i > 0; --i) {
      n *= i;
    }
  } else {
    n = "Wrong input";
  }
  return n;
}
