function saveUser(person) {
  localStorage.setItem('person', JSON.stringify(person));
}

function getUser() {
  const savedUser = localStorage.getItem('person');
  return JSON.parse(savedUser);
}

function removeUser() {
  localStorage.removeItem('person');
}

function addItemToCart(name, price) {
  let cart = getCart();
  if (cart && cart.items && cart.items.length > 0) {
    const index = cart.items.findIndex((item) => item.name === name);
    if (index >= 0) {
      cart.items[index].quantity += 1;
    } else {
      cart.items.push({ name: name, price: price, quantity: 1 });
    }

    cart.totalQuantity += 1;
    cart.totalPrice += price;
  } else {
    cart = {
      items: [{ name: name, price: price, quantity: 1 }],
      totalQuantity: 1,
      totalPrice: price,
    };
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

function getCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    return JSON.parse(savedCart);
  }

  return null;
}

function removeCart() {
  localStorage.removeItem('cart');
}

function updateCartView(elementId) {
  const cart = getCart();
  if (cart) {
    return (document.getElementById(
      `${elementId}`,
    ).innerHTML = `$${cart.totalPrice}, ${cart.totalQuantity} item(s)`);
  }

  return (document.getElementById(`${elementId}`).innerHTML = 'empty cart');
}
