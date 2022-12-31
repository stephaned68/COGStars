function roll(max) {
  return 1 + Math.floor(Math.random() * max);
}

const roller = function (options) {
  const dice = options.dice || 1;
  const faces = options.faces || 1;
  const mod = options.mod || 0;

  let result = {
    total: 0,
    dice: [],
  };

  for (let die = 1; die <= dice; die++) {
    const rolled = roll(faces);
    result.total += rolled;
    result.dice.push(rolled);
  }

  result.total += mod;

  return result;
};

export { roller };

export function rollTable(table, adjust = 0) {
  const rollerOptions = table.roll || { dice: 1, faces: 100 };
  let rolled = roller(rollerOptions).total + adjust;
  if (rolled < rollerOptions.dice) rolled = rollerOptions.dice;
  if (rolled > rollerOptions.dice * rollerOptions.faces) rolled = rollerOptions.dice * rollerOptions.faces;
  let found;
  table.results.forEach((result) => {
    if (rolled >= result.range.min && rolled <= result.range.max) {
      found = result;
    }
  });

  return found;
}
