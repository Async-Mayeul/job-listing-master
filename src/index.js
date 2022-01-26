const filterBar = document.getElementById("filter-bar");
const form = document.getElementById("nav-bar");
const search = document.getElementById("search-id");
const btn = document.getElementsByClassName("button-item");
const filterList = document.createElement("ul");
const clear = document.createElement("button");
let i = 0;
filterList.classList.add("filter-list");
clear.textContent = "Clear";
clear.classList.add("clear");

function addItem(e) {

  let newItem = document.createElement("li");
  let filterBtn = document.createElement("button");

  newItem.textContent = search.value;
  newItem.classList.add("filter-item");
  newItem.appendChild(filterBtn);
  filterBtn.classList.add("filter-btn");

  if (i < 3) {

    filterBar.appendChild(filterList);
    filterList.appendChild(newItem);

  }

  filterBar.appendChild(clear);
  e.preventDefault();
  i++;

}

function clearFilter() {

  let filterItem = document.getElementsByClassName('filter-item');
  let y = filterItem.length - 1;

  while (filterItem.length !== 0) {
    filterItem[y].parentNode.removeChild(filterItem[y]);
    y--;
  }

  filterBar.removeChild(clear);
  filterBar.removeChild(filterList);

  i = 0;

};

form.addEventListener("submit", addItem);
clear.addEventListener("click", clearFilter);
