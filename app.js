let nastedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(nastedArray.flat());

let showAllValue = (element, index, i) => {
  let p = document.createElement("p");
  p.innerText = element;
  p.setAttribute("onclick", "deleteElement(this)");
  p.setAttribute("data-parent", i);
  p.setAttribute("data-id", index);
  document.body.append(p);
};

let deleteElement = (item) => {
  let parent = item.getAttribute("data-parent");
  let id = item.getAttribute("data-id");
  console.log(nastedArray[parent][id]);
  nastedArray[parent].splice(id, 1);
  item.remove();
  console.log(nastedArray);
  document.body.innerHTML = "";
  renderItem();
};
function renderItem() {
  for (let i = 0; i < nastedArray.length; i++) {
    nastedArray[i].forEach((element, index) => showAllValue(element, index, i));
  }
}
renderItem();
