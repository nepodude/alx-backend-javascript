export default function createInt8TypedArray(length, position, value) {
  // 1. Check that position is within [0, length – 1]
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // 2. Create a new ArrayBuffer of the specified byte-length
  //    An ArrayBuffer is just a fixed block of raw memory (bytes).
  const buffer = new ArrayBuffer(length);

  // 3. Create an Int8Array “view” on that buffer
  //    Int8Array treats each byte as a signed 8-bit integer (–128..127).
  const view = new Int8Array(buffer);

  // 4. Set the given value at the specified index (position)
  //    This writes one signed 8-bit integer into the buffer at that offset.
  view[position] = value;

  // 5. Return the raw ArrayBuffer (not the view)
  return buffer;
}
