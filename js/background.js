const colors = [
  "#ececec",
  "#9fd3c7",
  "#385170",
  "#385170",
  "#142d4c",
  "#233142",
  "#455d7a",
  "#f95959",
  "#e3e3e3",
  "#ffcbcb",
  "#ffb5b5",
  "#407088",
  "#132743",
  "#e7eaf6",
  "#a2a8d3",
  "#38598b",
  "#113f67",
  "#27296d",
  "#5e63b6",
  "#a393eb",
  "#f5c7f7",
  "#93e4c1",
  "#3baea0",
  "#118a7e",
  "#1f6f78",
  "#f8b400",
  "#faf5e4",
  "#2c786c",
  "#004445",
  "#a8e6cf",
  "#fdffab",
  "#ffd3b6",
  "#ffd3b6",
  "#ffaaa5",
];

const bg = document.getElementById("bg");
function change() {
  const choseColour1 = colors[Math.floor(Math.random() * colors.length)];
  const choseColour2 = colors[Math.floor(Math.random() * colors.length)];
  bg.style.background = `linear-gradient(to right, ${choseColour1}, ${choseColour2})`;
}

change();
