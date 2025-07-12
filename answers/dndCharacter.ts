type DiceRoll = () => number;

type Character = {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  constitutionModifier: number;
  hitPoints: number;
};

export function determineParameters(randomFn: DiceRoll): number {
  const rolls = [randomFn(), randomFn(), randomFn(), randomFn()];
  return rolls.reduce((a, b) => a + b, 0) - Math.min(...rolls);
}

export function calculateModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

export function generateCharacter(randomFn: DiceRoll): Character {
  const con = determineParameters(randomFn);
  const mod = calculateModifier(con);
  return {
    strength: determineParameters(randomFn),
    dexterity: determineParameters(randomFn),
    constitution: con,
    intelligence: determineParameters(randomFn),
    wisdom: determineParameters(randomFn),
    charisma: determineParameters(randomFn),
    constitutionModifier: mod,
    hitPoints: 10 + mod,
  };
}

const main = () => {
  const rollDice = () => Math.floor(Math.random() * 6) + 1;
  const player = generateCharacter(rollDice);
  console.log(player);
};

main();
