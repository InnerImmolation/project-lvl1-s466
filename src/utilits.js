const getRandom = (mn, mx) => Math.round(Math.random() * (mx - mn) + mn);
const arRandom = arr => arr[Math.floor(Math.random() * arr.length)];

export { arRandom, getRandom };
