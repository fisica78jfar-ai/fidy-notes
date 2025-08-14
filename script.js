const listItems = document.querySelectorAll('.subsubmenu li');
const changedImage = document.getElementById('mainImage');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.getAttribute('data-img'); // get the data-img attribute value
    changedImage.src = imgSrc; // set the src of the image to that value
    changedImage.alt = "Reaction";
  });
});


const listButtons = document.querySelectorAll('button');
const changedImage2 = document.getElementById('mainImage');

listButtons.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc2 = item.getAttribute('data-img'); // get the data-img attribute value
    changedImage2.src = imgSrc2; // set the src of the image to that value
  });
});