const URL = require("url");

const url = new URL.URL(
  "https://nodejs.org:80/dist/latest-v20.x/docs/api/path.html?t=3#pathresolvepaths"
);

console.log(url);
console.log(url.searchParams.has("a"));
console.log(url.searchParams.has("t"));
console.log(url.searchParams.get("t"));
console.log(url.searchParams);
console.log(url.searchParams.toString());
url.searchParams.append("q", "5");
console.log(url.searchParams.toString());

const obj = {
  href: "https://nodejs.org:80/dist/latest-v20.x/docs/api/path.html?t=3#pathresolvepaths",
  origin: "https://nodejs.org:80",
  protocol: "https:",
  username: "",
  password: "",
  host: "nodejs.org:80",
  hostname: "nodejs.org",
  port: "80",
  pathname: "/dist/latest-v20.x/docs/api/path.html",
  search: "?t=3",
  hash: "#pathresolvepaths",
};

const xxx = URL.format(obj);
console.log(xxx);
