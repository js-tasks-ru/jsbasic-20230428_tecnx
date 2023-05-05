function ucFirst(str) {
  let firstToCap
  if (!str) {
    firstToCap = '';
  } else {
    firstToCap = str[0].toUpperCase() + str.slice(1);
  }
  return firstToCap;
}
