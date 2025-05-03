export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // create a new function scope so these vars don't touch the outer ones
    (function () {
      var task  = true;
      var task2 = false;
      // you could return them if you wanted—but here we ignore them
    })();
  }

  return [task, task2];
}
