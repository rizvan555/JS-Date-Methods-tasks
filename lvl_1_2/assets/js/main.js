let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

const ul = document.createElement("ul");
const li = document.createElement("li");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const li5 = document.createElement("li");
const li6 = document.createElement("li");
const li7 = document.createElement("li");

document.body.appendChild(ul);
ul.appendChild(li);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
ul.appendChild(li6);
ul.appendChild(li7);

const date = new Date();
li.textContent = date;
li1.textContent = date.getFullYear();
li2.textContent = date.getMonth() + " " + "Monat";
li3.textContent = date.getDate() + " " + "Tag";
li4.textContent = date.getHours() + " " + "Stunde";
li5.textContent = date.getMinutes() + " " + "Minute";
li6.textContent = wochenTag[date.getDay()];
li7.textContent = monate[date.getMonth()];
