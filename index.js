/* Selecting elements on the DOM */

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


/* Updating the DOM */

// const descriptions = document.querySelectorAll(".description-display");
// for (let desc of descriptions.values()) {
//     let content = desc.innerText;
//     console.log(content);
// }

// // truncating text
// for (let description of descriptions.values()) {
//     let content = description.innerText;
//     if (content.length > 250) {
//         content = content.slice(0, 250) + "<a href='#'>...</a>";
//         // description.innerText = content;  // changes the text as plain text
//     }
//     description.innerHTML = content;
// }


// // Changing Styles
// // bold the text for ratings greater than 4.7
// const ratings = document.querySelectorAll(".rating-display .value");
// for (let rating of ratings) {
//     let ratingValue = parseFloat(rating.innerText);
//     if (ratingValue > 4.7) {
//         // a classList is a collection of the different CSS classes applied to an element
//         rating.classList.add("high-rating");
//         rating.classList.remove("value");

//         // notice that in JavaScript camel case is used instead of hyphens for CSS properties
//         // rating.style.fontWeight = "bold";  
//         // rating.style.color = "#3ba17c";
//     }
// }


// // Adding a new element to the page with document.createElement()
// // add an element that displays the number of parks displayed on this page
// const parks = document.querySelectorAll(".park-display");
// const numberParks = parks.length;
// const newElement = document.createElement("div");
// newElement.innerText = `${numberParks} exciting parks to visit`;
// newElement.classList.add("header-statement");
// const header = document.querySelector("header");
// header.appendChild(newElement);


// removing an element with .removeChild()
// // Call that method on the parent element of what you want to remove
// // in this case removing an element from the main element
// const main = document.querySelector("main");
// const park = main.querySelector(".park-display");
// main.removeChild(park);


/* Event Listeners */

// Listening for the page to have loaded with the DOMContentLoaded event handler
// console.log("Before!");
// window.addEventListener("DOMContentLoaded", (event) => {
//     console.log("Loaded!");
// });
// console.log("After!");

// addEventListener(eventName, eventHandler)
const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
});

// get the specific element with the target property of the event object
// you may need the parentNode property of that element
const allBtns = document.querySelectorAll(".rate-button");
// Iterate through the list of buttons and add an event handeler to each
allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const park = event.target.parentNode;
        park.style.backgroundColor = "#c8e6c9";
    });
});


// for sorting by name in ascending order
const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    return parkAName > parkBName ? 1 : -1;
}

// nameSorter click handler
const nameSorterClickHandler = (event) => {
    // prevent the default behavior which is for the page to simply reload
    event.preventDefault();
    // 1. Get the main element
    const main = document.querySelector("main");
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
    // 3. Empty the main element
    main.innerHTML = "";
    // 4. Create an array, so that you can use sort()
    const parksArray = Array.from(parksList);
    // 5. Sort the array
    parksArray.sort(sortByName);
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
        main.appendChild(park);
    });
}

// for sorting by rating in descending order
const sortByRating = (parkA, parkB) => {
    const ratingA = parseFloat(parkA.querySelector(".rating-display .value").innerText);
    const ratingB = parseFloat(parkB.querySelector(".rating-display .value").innerText);
    return ratingB - ratingA;
}

const ratingSorterClickHandler = (event) => {
    event.preventDefault();
    const main = document.querySelector("main");
    const parksList = main.querySelectorAll(".park-display");
    const parksArray = Array.from(parksList);
    parksArray.sort(sortByRating);
    main.innerHTML = "";
    parksArray.forEach((park) => {
        main.appendChild(park);
    })
}


const main = () => {
    // Select the `nameSorter` link
    const nameSorter = document.querySelector("#name-sorter");
    // Add an event listener
    nameSorter.addEventListener("click", nameSorterClickHandler);

    const ratingSorter = document.querySelector("#rating-sorter");
    ratingSorter.addEventListener("click", ratingSorterClickHandler);
}

// Add the DOMContentLoaded event listener to the window object
window.addEventListener("DOMContentLoaded", main);