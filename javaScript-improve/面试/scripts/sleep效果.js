async function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

(async () => {
  await sleep(5000);
  console.log("dasher");
})();
