import gordon from './assets/images.jpeg';

export default function () {
  const content = document.getElementById('content');
  const txt = document.createElement('div');
  const img = document.createElement('div');

  const hero = document.createElement('img');
  hero.src = gordon;
  img.appendChild(hero);

  const title = document.getElementById('h1');
  title.innerText('About Us');

  const t = document.getElementById('p');
  t.innerText(
    'At Hell’s Kitchen, we bring the excitement of Chef Gordon Ramsay’s world-famous kitchen to your table with a menu crafted from the finest ingredients and bold, unforgettable flavors. Our restaurant blends modern elegance with a vibrant atmosphere, delivering exceptional service and a dining experience that turns every visit into a special occasion'
  );

  txt.appendChild(t);
  txt.appendChild(title);
  content.appendChild(txt);
  content.appendChild(img);
}
