function currentDate() {
  const div = document.createElement("div");
  document.body.appendChild(div);
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const fullDate = day + "/" + month + "/" + year;

  div.textContent = fullDate;
}
currentDate();
