function sum(array) {
  let s = 0;
  for (let i = 2; i < array.length; i++) {
    s = s + Number(array[i]);
  }
  return s;
}

console.log(sum(process.argv));
