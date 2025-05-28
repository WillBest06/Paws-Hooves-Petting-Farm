const shopItems = [
    {
        'name': 'Plush rabbit',
        'price': 10.00,
        'image': "images/shop/plush-rabbit.jpg",
        'alt': 'A picture of a stuffed rabbit',
    },
    {
        'name': 'Paws & Hooves hat',
        'price': 5.00,
        'image': "images/shop/junior-zookeeper-cap.webp",
        'alt': 'A green cap that reads "Junior Zookeeper"',
    },
    {
        'name': 'Pony club keychain',
        'price': 4.50,
        'image': "images/shop/pony-keychain.jpg",
        'alt': 'A small plastic keychain showing that the owner is a member of the pink pony club',
    },
    {
        'name': 'Animal sticker pack',
        'price': 3.00,
        'image': "images/shop/sticker-pack.avif",
        'alt': 'A pack of stickers featuring various farm animals',
    },
    {
        'name': 'Cornish flag pin badge',
        'price': 2.50,
        'image': "images/shop/cornish-pin-badge.jpg",
        'alt': 'A metal pin badge with the Cornish flag design',
    },
    {
        'name': 'Goat feed bag (small)',
        'price': 2.00,
        'image': "images/shop/goat-feed.jpg",
        'alt': 'A small paper bag of animal feed for goats',
    },
    {
        'name': 'Petting zoo souvenir mug',
        'price': 8.00,
        'image': "images/shop/mug-souvenir.jpg",
        'alt': 'A white ceramic mug with the petting zoo name and logo',
    },
];

function createItem(url, alt, name, price) {
    const itemCard = document.createElement('article');
    itemCard.classList.toggle('shop-item');

    const itemImage = document.createElement('img');
    itemImage.src = url;
    itemImage.alt = alt;
    itemImage.classList.toggle('shop-item-image');

    const itemName = document.createElement('h2');
    itemName.textContent = name;
    itemName.classList.toggle('shop-item-name');

    const itemPrice = document.createElement('h3');
    itemPrice.textContent = `£${price.toFixed(2)}`; // displays prices to 2 dp
    itemPrice.classList.toggle('shop-item-price');

    const itemBuy = document.createElement('button');
    itemBuy.textContent = 'Buy';
    itemBuy.classList.toggle('shop-item-buy');

    itemCard.appendChild(itemImage);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    itemCard.appendChild(itemBuy);
    
    const shopGrid = document.querySelector('.shop-grid');
    shopGrid.appendChild(itemCard);
}

for (let item of shopItems) {
    createItem(item.image, item.alt, item.name, item.price); 
}