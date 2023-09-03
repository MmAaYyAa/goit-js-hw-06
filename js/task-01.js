const list = document.querySelector("#categories");
// const items = categories.querySelectorAll(".item");
// console.log(`Number of categories: ${items.length}`);

let items = [];
let item = categories.firstElementChild;
while (item) {
    items.push(item);
    item = item.nextElementSibling;
}
console.log(`Number of categories: ${items.length}`);


items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  let elements = 0;
  let element = item.querySelector('ul').firstElementChild;
  while (element) {
    elements +=1;
    element = element.nextElementSibling;
  }
    console.log(`Category: ${title}
  Elements: ${elements}`);
});

// items.forEach(item => {
//     const title = item.querySelector("h2").textContent;
//     const elements = item.querySelectorAll("li");
//     console.log(`Category: ${title} 
//     Elements: ${elements.length}`)
// });