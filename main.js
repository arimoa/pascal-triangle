const containerEl = document.getElementById("container");
const inputEl = document.getElementById("input");
const btnEl = document.getElementById("btn");
let numRows;
btnEl.addEventListener("click", () => {
  containerEl.innerHTML = "";
  if (inputEl.value < 1) {
    inputEl.value = "";
    return alert("The entered number should be greater than 0");
  }
  if (!Number.isInteger(+inputEl.value)) {
    inputEl.value = "";
    return alert("The entered number should be an integer");
  }
  if (inputEl.value > 16) {
    inputEl.value = "";
    return alert("The entered number should be lower than 17");
  }
  numRows = inputEl.value;
  let arr = [];
  let rowArr = [];
  for (let i = 0; i < numRows; i++) {
    if (i == 0) {
      rowArr = [1];
      arr.push(rowArr);
    } else if (i == 1) {
      rowArr = [1, 1];
      arr.push(rowArr);
    } else {
      rowArr = [1];
      for (let j = 0; j <= arr[arr.length - 1].length - 2; j++) {
        rowArr.push(arr[arr.length - 1][j] + arr[arr.length - 1][j + 1]);
      }
      rowArr.push(1);
      arr.push(rowArr);
    }
  }
  for (let i = 0; i < numRows; i++) {
    let row_container = document.createElement("div");
    row_container.classList.add("row-container");
    containerEl.appendChild(row_container);

    for (let j = 0; j < arr[i].length; j++) {
      let el = document.createElement("div");
      el.innerHTML = arr[i][j];
      el.classList.add("element");
      row_container.appendChild(el);
    }
  }
});
