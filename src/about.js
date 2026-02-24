import gordon from './assets/hell_kitchen.jpg';

export default function () {
  const content = document.getElementById('content');

  const txt = document.createElement('div');
  txt.classList.add('about-text');

  const img = document.createElement('div');
  img.classList.add('about-img');

  const hero = document.createElement('img');
  hero.src = gordon;
  img.appendChild(hero);

  // FIX: title appended before paragraph (was reversed before)
  const title = document.createElement('h1');
  title.innerText = 'About Us';

  const t = document.createElement('p');
  t.innerText =
    "At Hell's Kitchen, we bring the excitement of Chef Gordon Ramsay's world-famous kitchen to your table with a menu crafted from the finest ingredients and bold, unforgettable flavors. Our restaurant blends modern elegance with a vibrant atmosphere, delivering exceptional service and a dining experience that turns every visit into a special occasion.";

  txt.appendChild(title);
  txt.appendChild(t);

  content.appendChild(txt);
  content.appendChild(img);
}