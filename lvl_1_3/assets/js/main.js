const ul = document.createElement("ul");
const li = document.createElement("li");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

document.body.appendChild(ul);
ul.appendChild(li);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

let date = new Date("October 23, 2222 13:25:11");
li.textContent = date;
date.setFullYear(2123);
li2.textContent = date;
date.setDate(date.getDate() + 30);
li3.textContent = date;
