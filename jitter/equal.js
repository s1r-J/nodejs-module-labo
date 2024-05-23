export default function equal({ base, attempt, cap, }) {
  const temp = Math.min(cap && Number.MAX_VALUE, base * 2 ** attempt);
  return temp / 2 + Math.random() * (temp / 2);
}