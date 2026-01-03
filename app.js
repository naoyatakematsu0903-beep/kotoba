const words = [
  { word: "いただきます", origin: "命をいただくことへの感謝の心。" },
  { word: "おかげさま", origin: "自分以外の存在に支えられているという考え方。" },
  { word: "もったいない", origin: "物や命の価値を無駄にしない心。" }
];

let index = Math.floor(Math.random() * words.length);

function render() {
  document.getElementById("word").textContent = words[index].word;
  document.getElementById("origin").textContent = words[index].origin;
}

render();
