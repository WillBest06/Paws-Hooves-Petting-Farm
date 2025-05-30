const shopItems = [
    {
        'id': 1,
        'name': 'Plush rabbit',
        'price': 10.00,
        'src': "images/shop/plush-rabbit.jpg",
        'alt': 'A picture of a stuffed rabbit',
    },
    {
        'id': 2,
        'name': 'Paws & Hooves hat',
        'price': 5.00,
        'src': "images/shop/junior-zookeeper-cap.webp",
        'alt': 'A green cap that reads "Junior Zookeeper"',
    },
    {
        'id': 3,
        'name': 'Pony club keychain',
        'price': 4.50,
        'src': "images/shop/pony-keychain.jpg",
        'alt': 'A small plastic keychain showing that the owner is a member of the pink pony club',
    },
    {
        'id': 4,
        'name': 'Animal sticker pack',
        'price': 3.00,
        'src': "images/shop/sticker-pack.avif",
        'alt': 'A pack of stickers featuring various farm animals',
    },
    {
        'id': 5,
        'name': 'Cornish flag pin badge',
        'price': 2.50,
        'src': "images/shop/cornish-pin-badge.jpg",
        'alt': 'A metal pin badge with the Cornish flag design',
    },
    {
        'id': 6,
        'name': 'Alpaca t-shirt',
        'price': 8.00,
        'src': "images/shop/alpaca-tee.jpg",
        'alt': 'A novelty tshirt that reads "Easily distracted by Alpacas"',
    },
    {
        'id': 7,
        'name': 'Petting zoo souvenir mug',
        'price': 4.00,
        'src': "images/shop/souvenir-mug.jpg",
        'alt': 'A white ceramic mug with the phrase "I heart petting zoos"',
    },
];

let basket = [];
let subtotal = 0;

function createTogglebasketIcon() {
    const header = document.querySelector('.head');
    const basket = document.querySelector('.shop-basket');
    const toggleBasket = document.createElement('button');
    toggleBasket.classList.toggle('shop-toggle-basket');
    toggleBasket.innerHTML = `<i class="bi bi-basket3 shop-toggle-basket-icon"></i> <div class="shop-toggle-basket-icon-quantity">0</div>`;
    header.appendChild(toggleBasket);

    toggleBasket.addEventListener('click', () => basket.classList.toggle('active'));
};

createTogglebasketIcon();

function createShopItem(id, src, alt, name, price) {
    const itemCard = document.createElement('article');
    itemCard.classList.toggle('shop-item');

    const itemImage = document.createElement('img');
    itemImage.src = src;
    itemImage.alt = alt;
    itemImage.classList.toggle('shop-item-image');

    const itemName = document.createElement('h2');
    itemName.textContent = name;
    itemName.classList.toggle('shop-item-name');

    const itemPrice = document.createElement('h3');
    itemPrice.textContent = `£${price.toFixed(2)}`; // displays prices to 2 dp
    itemPrice.classList.toggle('shop-item-price');

    const itemAddToBasket = document.createElement('button');
    itemAddToBasket.textContent = 'Add to basket'
    itemAddToBasket.classList.toggle('shop-item-add');
    itemAddToBasket.setAttribute('data-product-id', id);
    itemAddToBasket.addEventListener('click', (e) => {
        addItemToBasketArray(e.target.getAttribute('data-product-id'))
        updateBasket(basket);
    });

    itemCard.appendChild(itemImage);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    itemCard.appendChild(itemAddToBasket);
    
    const shopGrid = document.querySelector('.shop-grid');
    shopGrid.appendChild(itemCard);
};

for (let item of shopItems) {
    createShopItem(item.id, item.src, item.alt, item.name, item.price); 
};

function addItemToBasketArray (itemID) {
    const itemIndex = binarySearchForShopItem(shopItems, itemID);
    const item = shopItems[itemIndex];
    const basketIconQuantity = document.querySelector('.shop-toggle-basket-icon-quantity');
    basketIconQuantity.textContent++;

    if (basket.includes(item)) {
        ++item['quantity']; // increases qty rather than duplicating item
    } else {
        item['quantity'] = 1;
        basket.push(item);
    };

    subtotal = updateSubtotal();
    updateBasketIconQuantity(basket);
};

function updateBasket (basketArr) {
    const basket = document.querySelector('.shop-basket');
    
    while (basket.firstChild) {
        basket.removeChild(basket.firstChild);
    };

    const subTotal = document.createElement('h3');
    basket.appendChild(subTotal);

    basketArr.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.toggle('shop-basket-item');

        const itemThumbnail = document.createElement('img');
        itemThumbnail.src = item.src;
        itemThumbnail.classList.toggle('shop-basket-item-thumbnail');

        const itemDetails = document.createElement('div');
        itemDetails.classList.toggle('shop-basket-item-details');

        const itemName = document.createElement('h4');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('h4');
        itemPrice.textContent = `£${(item.price * item.quantity).toFixed(2)}`;
        subTotal.textContent = `Subtotal: £${subtotal.toFixed(2)}`;

        const itemDecrementQuantity = document.createElement('button');
        itemDecrementQuantity.textContent = '-';
        itemDecrementQuantity.classList.toggle('decrementQuantity');
        itemDecrementQuantity.setAttribute('data-product-id', item.id);
        itemDecrementQuantity.addEventListener('click', () => decrementQuantity(item));

        const itemQuantity = document.createElement('p');
        itemQuantity.textContent = `Qty: ${item.quantity}`;

        const itemIncrementQuantity = document.createElement('button');
        itemIncrementQuantity.textContent = '+';
        itemIncrementQuantity.classList.toggle('incrementQuantity');
        itemIncrementQuantity.setAttribute('data-product-id', item.id);
        itemIncrementQuantity.addEventListener('click', () => incrementQuantity(item));
        
        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemPrice);
        itemDetails.appendChild(itemDecrementQuantity);
        itemDetails.appendChild(itemQuantity);
        itemDetails.appendChild(itemIncrementQuantity);

        itemContainer.appendChild(itemThumbnail);
        itemContainer.appendChild(itemDetails);
        
        basket.appendChild(itemContainer);
    }); 
};

function incrementQuantity (item) {
    item.quantity++;
    subtotal = updateSubtotal();
    updateBasketIconQuantity(basket);
    updateBasket(basket);
}

function decrementQuantity(item) {
    if (item.quantity > 1) {
        item.quantity--;
    } else {
        basket = basket.filter((currentItem) => currentItem.id != item.id); // deletes item if quantity goes below 1
    }

    subtotal = updateSubtotal();
    updateBasketIconQuantity(basket);
    updateBasket(basket);
}

function updateSubtotal () {
    let subtotal = 0;

    basket.forEach(item => {
        subtotal += (item.price * item.quantity)
    });

    return subtotal;
}

function updateBasketIconQuantity (basketArr) {
    const basketIconQuantity = document.querySelector('.shop-toggle-basket-icon-quantity');
    let totalItems = 0;

    basketArr.forEach(item => {
        totalItems += item.quantity;
    })

    basketIconQuantity.textContent = totalItems;
};

function binarySearchForShopItem (arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid]['id'] == target) {
            return mid; // returns pointer to index in arr
        } else if (arr[mid]['id'] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    };

    return -1
};