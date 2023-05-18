function camelize(str) {
  let arr = str.split("-");
  let arrUp = arr.map((item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1));
  return arrUp.join("");
}
