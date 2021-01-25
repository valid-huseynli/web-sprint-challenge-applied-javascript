// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const imgContainer = document.createElement("div");
const img = document.createElement("img");
const name = document.createElement("span");

// creating classes
cardContainer.classList.add("card");
headline.classList.add("headline");
author.classList.add("author");
imgContainer.classList.add("img-container");

// creating textContent

headline.textContent = article.headline;
img.src = article.authorPhoto;
name.textContent = `{By ${article.authorName}`;

// appending

cardContainer.append(headline, author);
author.append(imgContainer, name);
imgContainer.append(img);

// event listener

cardContainer.addEventListener("click", () => {
  console.log(headline.textContent);
});

return cardContainer;

