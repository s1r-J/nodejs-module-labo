export default function full({ base, attempt, cap, }) {
  return Math.random() * (Math.min(cap && Number.MAX_VALUE, base * 2 ** attempt));
}