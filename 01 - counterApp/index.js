let count = 0;

const countHeader = document.getElementById("count");
const addBtn = document.getElementById("add-button");
const subBtn = document.getElementById("sub-button");

countHeader.innerText = count;

addBtn.addEventListener("click", function () {
  if (count < 10) {
    count++;
    countHeader.innerText = count;
  }
});

subBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    countHeader.innerText = count;
  }
});
