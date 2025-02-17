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
  }
];


const galleryList = document.querySelector('.gallery');
  galleryList.style.display = 'flexbox';
  galleryList.style.listStyleType = 'none';
  

const createGalleryItem = (image) => {
  const element = document.createElement('li');
  element.classList.add('gallery-item');
  element.style.marginBottom = '20px';

  const imageElement = document.createElement('img');
  imageElement.src = image.url;
  imageElement.alt = image.alt;
  imageElement.classList.add('gallery-image');

  imageElement.style.width = '360px';
  imageElement.style.height = '100%';
  
  element.append(imageElement);
  return element;
};

const addGalleryItems = (imagesArray) => {
  const galleryItems = imagesArray.map(createGalleryItem);
  galleryList.append(...galleryItems);
};

addGalleryItems(images);
