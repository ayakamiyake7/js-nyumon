"use strict";
// 初級
// 4
const items = document.querySelectorAll("li");
items.forEach((item) => {
  item.addEventListener("click", () => {
    // const result = item.className;
    const result = item.getAttribute("class");
    console.log(result);
  });
});

// 5
// 11
// 13
// 16
