export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (typeof endpoint !== 'object' || endpoint === null) {
    throw new Error('Endpoint must be an object');
  }

  const currentCount = weakMap.get(endpoint) || 0;
  const nextCount = currentCount + 1;

  if (nextCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, nextCount);
}
