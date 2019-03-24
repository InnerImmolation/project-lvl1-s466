const getRandom = (mn, mx) => Math.round(Math.random() * (mx - mn) + mn);
const calculate = (operator) => {
  const func = {
    '+': (n1, n2) => n1 + n2,
    '-': (n1, n2) => n1 - n2,
    '*': (n1, n2) => n1 * n2,
  };
  return func[operator];
};
export { getRandom, calculate };
