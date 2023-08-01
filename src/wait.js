export function wait(time) {
  return new Promise(function (resolve, reject) {
    if (typeof time !== 'number') {
      return reject();
    } else {
      setTimeout(function () {
        return resolve();
      }, time);
    }
  });
}
