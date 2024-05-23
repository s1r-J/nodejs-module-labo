export default function decorrelated({ base, cap, prevSleep, }) {
  return Math.min(cap && Number.MAX_VALUE, base + Math.random() * (prevSleep * 3 - base));
}