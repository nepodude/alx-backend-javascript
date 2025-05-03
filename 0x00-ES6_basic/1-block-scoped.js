export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true;  // scoped only inside the if block
    let task2 = false;
    return [task, task2];  // use these if condition is true
  }

  return [task, task2];  // use outer values if false
}
  