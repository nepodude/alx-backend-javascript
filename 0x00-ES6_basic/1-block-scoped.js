export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    task2 = true;
    task = false;
  }

  return [task, task2];
}
