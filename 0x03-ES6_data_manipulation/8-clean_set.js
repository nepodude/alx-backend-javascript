export default function cleanSet(mySet, startString) {
  if (!(mySet instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const parts = [];
  for (const value of mySet) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      parts.push(value.slice(startString.length));
    }
  }

  return parts.join('-');
}
