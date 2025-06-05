export default function updateUniqueItems(itemsMap) {
  if (!(itemsMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, quantity] of itemsMap) {
    if (quantity === 1) {
      itemsMap.set(key, 100);
    }
  }

  return itemsMap;
}
