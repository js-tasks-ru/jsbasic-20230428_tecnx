function sumSalary(salaries) {
  let sum = 0;
  for (let obj in salaries) {
    if (isFinite(salaries[obj])) {
      sum += salaries[obj];
    }
  } return sum;
}
