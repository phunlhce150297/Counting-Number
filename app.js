const btns = document.querySelectorAll("button");
const value = document.getElementById("value");

let count = 0;

btns.forEach(function (btn) {
  return btn.addEventListener("click", function (e) {
    let val = e.target.id;

    if (val === "decrease") {
      count -= 1;
    }
    if (val === "increase") {
      count += 1;
    }
    if (val === "reset") {
      count = 0;
    }

    value.innerHTML = count;
    value.style.color = getColor();
  });
});

function getColor() {
  if (count > 0) {
    return "#16a085";
  }
  if (count < 0) {
    return "#d63031";
  }
  return "#222";
}
