function wait(callback, num) {
  setTimeout(() => {
    console.log(num);
    callback(num);
  }, 1000);
}

wait((num) => {
  // console.log("callback function is called.");
  num++;
  wait((num) => {
    num++;
    wait((num) => {
      num++;
    }, num);
  }, num);
}, 0);
