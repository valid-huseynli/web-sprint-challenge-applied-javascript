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

const log = console.log;

const cardContainer = document.querySelector('.cards-container')


const Card = (article) => {
const cardWrap = document.createElement('div');
    const articleHeadline = document.createElement('div');
    const authorWrap = document.createElement('div');
    const imgWrap = document.createElement('div');
    const imgPic = document.createElement('img');
    const authorName = document.createElement('span');

    cardWrap.classList.add('card');
    articleHeadline.classList.add('headline');
    authorWrap.classList.add('author');
    imgWrap.classList.add('img-container')

    cardWrap.append(articleHeadline, authorWrap);
    authorWrap.append(imgWrap, authorName);
    imgWrap.append(imgPic);

    articleHeadline.textContent = article.headline;
    authorName.textContent = article.authorName;
    imgPic.src = article.authorPhoto;

    cardWrap.addEventListener('click' , () => {
        log(articleHeadline.textContent);
    })
return cardWrap;
}

axios.get('https://lambda-times-api.herokuapp.com/articles').then((goodResponse) => {
        log('card response here' , goodResponse);
        const responseArray = Object.values(goodResponse.data.articles)
            log('response Array here' , responseArray)
            responseArray.forEach(category => {
                // log('category response here' , category)
                category.forEach(article => {
                    // log('article response here' , article)
                    cardContainer.appendChild(Card(article))
                })
            })
    })
    .catch((badResponse) => {alert(`${badResponse} is why this page didn't load`);
    })