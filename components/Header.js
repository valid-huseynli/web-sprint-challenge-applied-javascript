// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerCont = document.querySelector(".header-container");

function Header() {

const mainHeader = document.createElement("div");
    const span1 = document.createElement("span");
    const header1 = document.createElement("h1");
    const span2 = document.createElement("span");

    mainHeader.classList.add("header");
    span1.classList.add("date");
    span2.classList.add("temp");

    span1.textContent = "March 28th, 2020";
    header1.textContent = "Lambda Times";
    span2.textContent = "98°";

    headerCont.append(Header());
    mainHeader.append(span1, header1, span2);

return mainHeader;
}

headerCont.appendChild(Header())

