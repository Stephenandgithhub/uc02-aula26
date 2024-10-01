const dividend = Number(prompt("Inform dividend"));
const divider = Number(prompt("Inform divider"));

console.log(`Dividend + ${dividend}`);
console.log("Divider" + divider);

let print = 0;

//If print = 0, no calculation, else calculate

if (divider != 0) {
  print = dividend / divider;
} else {
  print = 1;
}
const message = `The result of ${dividend} divided by ${divider} equals ${print}`;
const elementMessage = document.createElement("h1");
elementMessage.textContent = message;
document.body.appendChild(elementMessage);
