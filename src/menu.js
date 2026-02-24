import pizza from './assets/image3.jpg';
import pasta from './assets/image4.jpg';
import wellington from './assets/image5.jpg';
import steak from './assets/image6.jpg';
import chicken from './assets/image7.jpg';

export function MenuCard(name, desc, price, img) {
  const content = document.getElementById('content');
  const item = document.createElement('div');
  item.classList.add('menu-card'); 

  const image = document.createElement('img');
  image.src = img;
  image.classList.add('menu-img');

  const info = document.createElement('div');
  info.classList.add('menu-info');

  const item_name = document.createElement('h3');
  item_name.innerText = name;

  const item_desc = document.createElement('p');
  item_desc.innerText = desc;

  const item_price = document.createElement('h5');
  item_price.innerText = price;

  info.appendChild(item_name);
  info.appendChild(item_desc);
  info.appendChild(item_price);

  item.appendChild(image);
  item.appendChild(info);
  content.appendChild(item);
}

export default function () {
  MenuCard(
    'Truffle Mushroom Pizza',
    'Wood-fired pizza topped with wild mushrooms, truffle oil, mozzarella, and fresh herbs on a perfectly crisp crust.',
    '₹1,095',
    pizza
  );
  MenuCard(
    'Creamy Alfredo Pasta',
    'Fettuccine tossed in a rich Parmesan Alfredo sauce with garlic, butter, and a touch of fresh cream.',
    '₹945',
    pasta
  );
  MenuCard(
    'Beef Wellington',
    'Signature tenderloin wrapped in mushroom duxelles and golden puff pastry, served with red wine jus.',
    '₹2,495',
    wellington
  );
  MenuCard(
    'Grilled Ribeye Steak',
    'Juicy ribeye grilled to perfection, finished with herb butter and served with seasonal vegetables.',
    '₹2,495',
    steak
  );
  MenuCard(
    'Herb Roast Chicken',
    'Slow-roasted chicken infused with rosemary, thyme, and garlic, served with a rich pan gravy.',
    '₹1,295',
    chicken
  );
}