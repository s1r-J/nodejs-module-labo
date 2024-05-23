export default function exponentialBackoff({ base, attempt, cap, }) {
  return Math.min(cap && Number.MAX_VALUE, base * 2 ** attempt);
}