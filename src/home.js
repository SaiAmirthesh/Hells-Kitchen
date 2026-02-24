import img1 from './assets/image1.jpg'

export default function(){
    const content = document.getElementsById('content');
    const image = document.createElement('div');
    const textcont = document.createElement('div');

    content.appendChild(image);
    
    img_div = document.createElement('img');
    img_div.setAttribute(id, dish);
    
    img_div.src = img1;
    image.appendChild(img_div);

    const title = document.createElement('h2');
    title.innerText="Welcome to Hell's kitchen"

    const t1 = document.createElement('p');
    t1.innerText = "Welcome to Hell’s Kitchen, where bold flavors, world-class ingredients, and the signature touch of Gordon Ramsay create an unforgettable dining experience.."

    const t2 = document.createElement('p');
    t2.innerText = "Step inside and savor the energy, elegance, and iconic dishes inspired by the legendary kitchen."


    textcont.appendChild(title);
    textcont.appendChild(t1);
    textcont.appendChild(t2);
    content.appendChild(textcont);
    
}






