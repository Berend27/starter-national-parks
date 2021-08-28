const heading = document.querySelector("h1");
console.log(heading)

const valueElement = document.querySelector(".value");
console.log(valueElement);

const buttonElement = document.querySelector("button");
console.log(buttonElement);

const areaElement = document.querySelector(".area");
console.log(areaElement);

const statDescendentDiv = document.querySelector(".stat div");
console.log(statDescendentDiv);

const helloElement = document.querySelector(".hello");
console.log(helloElement)

// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);

// Get a list of all '<h3>' elements
// const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
    console.log(element);
}

// console.log("\n");

// for (let i = 0; i < heading3List.length; i++) {
//     const element = heading3List[i];
//     console.log(element);
// }

const ratingDivs = document.querySelectorAll(".rating-display");
for (let div of ratingDivs.values()) {
    console.log(div);
}

const areaDivs = document.querySelectorAll(".area-display");
for (let i = 0; i < areaDivs.length; i++) {
    const element = areaDivs[i];
    console.log(element)
}


// supporting Internet Explorer and very old browsers
// using Array.prototype.forEach()
const descriptionDivs = document.querySelectorAll(".description-display");
Array.prototype.forEach.call(descriptionDivs, function (element) {
    console.log(element);
})