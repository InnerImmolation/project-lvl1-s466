const getRandom = (mn, mx) => Math.round(Math.random() * (mx - mn) + mn);
const arRandom = arr => arr[Math.floor(Math.random() * arr.length)];
const seqGen = (first, length, step) => {
  const iter = (num, i, acc) => {
    if (i === 0) {
      return acc;
    }
    return iter(num + step, i - 1, acc.concat(num));
  };
  return iter(first, length, []);
};
export { arRandom, getRandom, seqGen };
