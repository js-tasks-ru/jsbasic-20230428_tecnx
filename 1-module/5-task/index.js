function truncate(str, maxlength) {
  let output
  if (str.length > maxlength) {
    output = str.slice(0, maxlength - 1) + "…"
  } else {
    output = str
  }
  return output
}
