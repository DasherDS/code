const os = require("os");
console.log(os.EOL); // 目前是看不见的 因为已经转义了

console.log(os.arch());

console.log(os.cpus());
console.log(os.cpus().length);

console.log(os.freemem());
console.log(os.freemem() / 1024 ** 3);

console.log(os.homedir());

console.log(os.hostname());


console.log(os.tmpdir());