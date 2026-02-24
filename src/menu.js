import pizza from './assets/image3.jpg';
import pasta from './assets/image4.jpg';
import wellington from './assets/image5.jpg';
import steak from './assets/image2.jpg';
import chicken from './assets/image2.jpg';

export function MenuCard(name,desc,price,img){
    const content = document.getElementById('content');
    const item  = document.createElement('div');
    
    const item_name = document.createElement('h3');
    item_name.innerText = name;
    
    const item_desc = document.createElement('p');
    item_desc.innerText = desc;

    const item_price = document.createElement('h5');
    item_price = price;

    const image = document.createElement('img');
    image.src = img;

    item.appendChild(item_name);
    item.appendChild(item_desc);
    item.appendChild(item_price);
    item.appendChild(image);
    content.appendChild(item);
}

export default function(){
    const item1 = new MenuCard(
        'Truffle Mushroom Pizza',
        'Wood-fired pizza topped with wild mushrooms, truffle oil, mozzarella, and fresh herbs on a perfectly crisp crust.',
        '₹1,095',
        pizza
    )
    const item2 = new MenuCard(
        'Creamy Alfredo Pasta',
        'Fettuccine tossed in a rich Parmesan Alfredo sauce with garlic, butter, and a touch of fresh cream.',
        '₹945',
        pasta
    )
    const item3 = new MenuCard(
        'Beef Wellington',
        'Signature tenderloin wrapped in mushroom duxelles and golden puff pastry, served with red wine jus.',
        '₹2,495',
        wellington
    )
    const item4 = new MenuCard(
        'Grilled Ribeye Steak',
        'Juicy ribeye grilled to perfection, finished with herb butter and served with seasonal vegetables.',
        '₹2,495',
        steak
    )
    const item5 = new MenuCard(
        'Herb Roast Chicken',
        'Slow-roasted chicken infused with rosemary, thyme, and garlic, served with a rich pan gravy.',
        '₹1,295',
        chicken
    )
}