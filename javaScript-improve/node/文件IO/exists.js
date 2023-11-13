const fs = require("fs");
const path = require("path");

const dirname = path.resolve(__dirname, "./2.jpg");

async function exists(filename) {
  try {
    await fs.promises.stat(filename);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

exists(dirname).then((res) => {
  console.log(res);
});
