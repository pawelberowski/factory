export function determineFaultiness(faultinessChance) {
  const randomNumber = Math.random() * 100;
  return randomNumber <= faultinessChance;
}
