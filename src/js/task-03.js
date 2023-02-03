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

const imagesList = document.querySelector('.gallery');

imagesList.style.display = 'flex';
imagesList.style.alignItems = 'center';
imagesList.style.justifyContent = 'space-between';

const imageItem = ({url, alt}) => {
  return `<li class="image__item"><img src="${url}" alt="${alt}" width=400></li>`;
};

const newImagesList = images.map(imageItem).join(" ");
console.log(newImagesList);

imagesList.insertAdjacentHTML("afterbegin", newImagesList);