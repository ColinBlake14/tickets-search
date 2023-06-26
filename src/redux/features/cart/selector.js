const selectCartModule = (state) => state.cart;

export const selectProductAmount = (state, id) => selectCartModule(state)[id] ? selectCartModule(state)[id].count : 0;

export const selectProductsAmount = (state) => {
  const cart = selectCartModule(state) || {};
  let count = 0;

  for (let item in cart) {
    count += cart[item].count;
  }

  return count;
}

export const selectCartProducts = (state) => {
  const cart = selectCartModule(state) || {};

  const cartArr = Object.values(cart);

  return cartArr;
}
