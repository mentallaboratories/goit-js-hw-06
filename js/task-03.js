const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

 const galleryEl = document.querySelector('.gallery');


// const makeImageGallery = images => {
//   return images.map((image) => {

//     const galleryItemEl = document.createElement('li');
//     galleryItemEl.classList.add('gallery-item');
    
    
//     const imgEl = document.createElement('img');
//     imgEl.src = image.url;
//     imgEl.alt = image.alt;
//     imgEl.width = 320;
//     imgEl.classList.add('gallery-image');
    
    
//     galleryItemEl.append(imgEl);
    
//     return galleryItemEl;
//     });
// };
// const imagesCollection = makeImageGallery(images);
// galleryEl.append(...imagesCollection);

//////insertAdjucentHTML//////

const makeImageGalleryMarkup = images => {const {url, alt} = images;
return`
  <li class="gallery-item">
    <img class="gallery-image" src="${url}" alt = "${alt}" width="320">
  </li>
`;
};

const makeImageGallery = images.map(makeImageGalleryMarkup).join('');
galleryEl.insertAdjacentHTML('afterbegin', makeImageGallery);
console.log(makeImageGallery);