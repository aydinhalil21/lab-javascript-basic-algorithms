console.log("I'm ready!");
console.log("I'm ready!");
let hacker1="halil";
console.log(`The driver's name is ${hacker1}`);
let hacker2="telma";
console.log(`The navigator's name is ${hacker2}`);
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
  let example= "";
for (let i=0; i<hacker1.length; i++) {
  example += hacker1[i].toUpperCase() + " ";
 }
console.log(example);
let reverse= "";
for (let i=hacker2.length-1; i>=0; i--) {
  reverse += hacker2[i];
}
console.log(reverse);
if (hacker2.localeCompare(hacker1)==1) {
  console.log("The driver's name goes first.");
}
else if (hacker2.localeCompare(hacker1)==-1) {
  console.log("Yo, the navigator goes first, definitely.");
}
else {
  console.log("What?! You both have the same name?");
}
let longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae dictum lorem. Ut at fermentum mi. Cras enim velit, malesuada non sollicitudin non, efficitur et erat. Vestibulum porta id augue non semper. Ut dictum suscipit porta. Vivamus venenatis, tellus a fermentum varius, elit odio laoreet ligula, quis luctus orci velit ac lorem. Maecenas vitae semper dolor, et placerat lacus. Duis lacinia porta imperdiet. Fusce interdum risus vel tincidunt tempor. Aliquam pellentesque ligula leo, posuere congue ante maximus quis."
let longTextWords= 1
for (let i=0; i<longText.length; i++) {
  if (longText[i]===" ") {
    longTextWords++;
  }
}
  console.log(longText);
console.log(longTextWords);
let etCounter=0;
for (let i=0; i<longText.length; i++) {
  let count = ""
  count+=longText[i] + longText[i+1] + longText[i+2] + longText[i+3];
  if (count===" et ") {
    etCounter++;
  }
}
console.log(etCounter);