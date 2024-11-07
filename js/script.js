const menu = document.querySelector('#menu');

/* 
const strawberry = {
  name: 'イチゴ',
  img: 'strawberry.jpg',
  price: 450,
};

const key = 'name';

console.log(strawberry.key);
console.log(strawberry[key]);
 */

const lists = [
  {
    name: 'イチゴ',
    img: 'strawberry.jpg',
    price: 450,
  },
  {
    name: 'ライム',
    img: 'lime.jpg',
    price: 400,
  },
  {
    name: 'マンゴー',
    img: 'mango.jpg',
    price: 500,
  },
  {
    name: 'レモン',
    img: 'lemon.jpg',
    price: 400,
  },
  {
    name: 'イチジク',
    img: 'fig.jpg',
    price: 500,
  },
  {
    name: 'リンゴ',
    img: 'apple.jpg',
    price: 400,
  },
];

console.log(lists[0].img);

// console.log(lists[5]);
// console.log(lists.length);

/* 
for (let i = 1; i <= 100; i++) {
  console.log(`${i}回目のこんにちは！`);
}
 */

/*
const content = `
  <div><img src="images/${lists[0]}" alt=""></div>
  <div><img src="images/${lists[1]}" alt=""></div>
  <div><img src="images/${lists[2]}" alt=""></div>
  <div><img src="images/${lists[3]}" alt=""></div>
  <div><img src="images/${lists[4]}" alt=""></div>
  <div><img src="images/${lists[5]}" alt=""></div>
`;
*/
for (let i = 0; i < lists.length; i++) {
  /*
  const name = lists[i].name;
  const img = lists[i].img;
  const price = lists[i].price;
  */

  const { name, img, price } = lists[i];
  
  const content = `
    <div>
      <img src="images/${img}" alt="${name}">
      <h2>${name}</h2>
      <p>${price}円</p>
    </div>
  `;
  menu.insertAdjacentHTML('beforeend', content);
}

// menu.textContent = content;