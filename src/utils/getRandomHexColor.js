export function getRandomHexColor() {
  const random = Math.floor(Math.random() * 16777215).toString(16);

  const result = random.length === 5 ? random + '0' : random;

  return `#${result}`;
}
