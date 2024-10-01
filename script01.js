//If & else if

const numberMonth = Number(prompt("Please enter the month number"));

//if month = 1, then month = Jan, else if =2, month = Feb, else if = 3, month = Mar

let nameMonth;

/*if (numbermonth === 1) {
  print = "January";
} else if (numbermonth === 2) {
  print = "Febuary";
} else if (numbermonth === 3) {
  print = "March";
} else if (numbermonth === 4) {
  print = "April";
} else if (numbermonth === 5) {
  print = "May";
} else if (numbermonth === 6) {
  print = "June";
} else if (numbermonth === 7) {
  print = "July";
} else if (numbermonth === 8) {
  print = "August";
} else if (numbermonth === 9) {
  print = "September";
} else if (numbermonth === 10) {
  print = "October";
} else if (numbermonth === 11) {
  print = "November";
} else if (numbermonth === 12) {
  print = "December";
} else {
  print = "Invalid month";
}
*/
//SWITCH CASE

switch (numberMonth) {
  case 1:
    nameMonth = "January";
    break;
  case 2:
    nameMonth = "Febuary";
    break;
  case 3:
    nameMonth = "March";
    break;
  case 4:
    nameMonth = "April";
    break;
  case 5:
    nameMonth = "May";
    break;
  case 6:
    nameMonth = "June";
    break;
  case 7:
    nameMonth = "July";
    break;
  case 8:
    nameMonth = "August";
    break;
  case 9:
    nameMonth = "September";
    break;
  case 10:
    nameMonth = "October";
    break;
  case 11:
    nameMonth = "November";
    break;
  case 12:
    nameMonth = "December";
    break;
  default:
    nameMonth = "Invalid month";
    break;
}
document.body.appendChild(document.createTextNode(nameMonth));
