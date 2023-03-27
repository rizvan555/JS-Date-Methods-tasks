const list = [
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

const checkMonth = (a, b) => {
  const date = new Date(a);
  const monthNumber = date.getMonth();
  const monatsName = b ? b : list;
  return monatsName[monthNumber];
};

console.log(checkMonth("2001,3,4")); //März
console.log(checkMonth("2019,12,24")); //Dezember
console.log(checkMonth("1410,07,15")); //Juli
