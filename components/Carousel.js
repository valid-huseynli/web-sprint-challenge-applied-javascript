/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let imagesArray = [
  "https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg",
  "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg",
  "https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" ,
  "https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg"
]

const carouselCompnent = (array) => {

  const carouselDiv = document.createElement('div');
    const divLeft = document.createElement('button');
    const picContainer = document.createElement('div')
    const divRight= document.createElement('button');
   
    
    carouselDiv.classList.add('carousel');
    divLeft.classList.add('left-button');
    divRight.classList.add('right-button');
    picContainer.classList.add('pictures')
    

    carouselDiv.append(divLeft, picContainer, divRight);
         
   
    divLeft.textContent= "<"
    divRight.textContent= ">"
    array.forEach((images) => {
      const picture=document.createElement('img')
      picContainer.append(picture)
      picture.src=images;
      picContainer.firstChild.classList.add('active')
      picContainer.firstChild.style.display='block'
    
      const nextPicture = () => {
      const current = document.querySelector('.active');
      current.classList.remove('active')
      current.style.display = 'none';
      if (current.nextElementSibling){
        current.nextElementSibling.classList.add('active')
        current.nextElementSibling.style.display = "block";
      }else{
        picture[0].classList.add('active')
      }
      setTimeout(() => {current.classList.remove('active')})
    }
    const prevPicture = () => {
      const current = document.querySelector('.active');
      current.classList.remove('active')
      current.style.display = 'none'
      if (current.previousElementSibling){
        current.previousElementSibling.classList.add('active')
        current.previousElementSibling.style.display='block'
      }else{
        picture[imagesArray -1].classList.add('active')
      }
      setTimeout(() => {current.classList.remove('active')})
    }
    
    divRight.addEventListener('click' , () => {
      nextPicture();
    })
    divLeft.addEventListener('click', () => {
      prevPicture();
    })
  })
  
  return carouselDiv;
}

const carContainer = document.querySelector('.carousel-container')
carContainer.append(carouselCompnent(imagesArray))
