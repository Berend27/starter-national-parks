// Selecting elements on the DOM

// const heading = document.querySelector("h1");
// console.log(heading)

// const valueElement = document.querySelector(".value");
// console.log(valueElement);

// const buttonElement = document.querySelector("button");
// console.log(buttonElement);

// const areaElement = document.querySelector(".area");
// console.log(areaElement);

// const statDescendentDiv = document.querySelector(".stat div");
// console.log(statDescendentDiv);

// const helloElement = document.querySelector(".hello");
// console.log(helloElement)

// // Find all the buttons on the page
// const buttons = document.querySelectorAll("button");
// console.log(buttons);

// // Get a list of all '<h3>' elements
// // const heading3List = document.querySelectorAll("h3");

// // Iterate over the list and print each one
// for (let element of heading3List.values()) {
//     console.log(element);
// }

// // console.log("\n");

// // for (let i = 0; i < heading3List.length; i++) {
// //     const element = heading3List[i];
// //     console.log(element);
// // }

// const ratingDivs = document.querySelectorAll(".rating-display");
// for (let div of ratingDivs.values()) {
//     console.log(div);
// }

// const areaDivs = document.querySelectorAll(".area-display");
// for (let i = 0; i < areaDivs.length; i++) {
//     const element = areaDivs[i];
//     console.log(element)
// }


// // supporting Internet Explorer and very old browsers
// // using Array.prototype.forEach()
// const descriptionDivs = document.querySelectorAll(".description-display");
// Array.prototype.forEach.call(descriptionDivs, function (element) {
//     console.log(element);
// })


// Updating the DOM

const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
    let content = desc.innerText;
    console.log(content);
}

// truncating text
for (let description of descriptions.values()) {
    let content = description.innerText;
    if (content.length > 250) {
        content = content.slice(0, 250) + "<a href='#'>...</a>";
        // description.innerText = content;  // changes the text as plain text
    }
    description.innerHTML = content;
}


// Changing Styles
// bold the text for ratings greater than 4.7
const ratings = document.querySelectorAll(".rating-display .value");
for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    if (ratingValue > 4.7) {
        // a classList is a collection of the different CSS classes applied to an element
        rating.classList.add("high-rating");
        rating.classList.remove("value");

        // notice that in JavaScript camel case is used instead of hyphens for CSS properties
        // rating.style.fontWeight = "bold";  
        // rating.style.color = "#3ba17c";
    }
}


// Adding a new element to the page with document.createElement()
// add an element that displays the number of parks displayed on this page
const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);


// removing an element with .removeChild()
// // Call that method on the parent element of what you want to remove
// // in this case removing an element from the main element
// const main = document.querySelector("main");
// const park = main.querySelector(".park-display");
// main.removeChild(park);