//command -> lamp on or not

const command = prompt("Inform a command to turn lamp on or off");

const elementImage = document.createElement("img");
switch (command.toLowerCase()) {
  case "on":
    elementImage.src = "./Assets/on.jpg";
    break;

  case "off":
    elementImage.src = "./Assets/off.jpg";
    break;
  default:
    break;
}
