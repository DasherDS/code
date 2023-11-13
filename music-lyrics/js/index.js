const doms = {
  audio: document.querySelector("audio"),
  ul: document.getElementById("ul"),
  lrc: document.querySelector(".lrc"),
};

// 解析歌词字符串
const parseLrc = (lrc) => {
  return lrc
    .split("\n")
    .map((item, index) => {
      const parse = item.split("]");

      if (parse[0]) {
        return {
          time: parseTime(parse[0].substring(1)),
          words: parse[1],
        };
      } else {
        return false;
      }
    })
    .filter(Boolean);
};

const parseTime = (timeStr) => {
  const parse = timeStr.split(":");
  return +parse[0] * 60 + +parse[1];
};

const findIndex = (arr) => {
  const currentTime = doms.audio.currentTime;
  for (let i = 0; i < arr.length; i++) {
    if (currentTime < arr[i].time) {
      return i - 1;
    }
  }

  return arr.length - 1;
};

const arr = parseLrc(lrc);

const initFunc = () => {
  const frag = document.createDocumentFragment();
  arr.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.words;
    frag.appendChild(li);
  });
  doms.ul.appendChild(frag);
};

initFunc();

const lrcHeight = doms.lrc.clientHeight;

const liHeight = doms.ul.children[0].clientHeight;

const maxOffset = doms.ul.clientHeight - lrcHeight;

const setOffset = () => {
  console.log("ul", doms.ul.clientHeight);
  console.log("lrcHeight", lrcHeight);
  const lrcIndex = findIndex(arr);

  const h1 = liHeight * lrcIndex + liHeight / 2;

  let offset = h1 - lrcHeight / 2;

  

  if (offset < 0) {
    offset = 0;
  }

  if (maxOffset < offset) {
    offset = maxOffset;
  }

  doms.ul.style.transform = `translateY(-${offset}px)`;

  let li = doms.ul.querySelector(".active");
  if (li) {
    li.classList.remove("active");
  }

  li = doms.ul.children[lrcIndex];

  if (li) {
    li.classList.add("active");
  }
  

  console.log(offset);
};

doms.audio.addEventListener("timeupdate", () => {
  setOffset();
});

setOffset();
