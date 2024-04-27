

export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []


export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {

  const { type, data } = action

  switch (type) {
    case 'ADD_TO_CART':
      const productInCartIndex = state.findIndex(item =>
        item.id === data.id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocalStorage(newState)
        return newState
      }

      const newStateAdd = [
        ...state,
        {
          ...data,
          quantity: 1
        }
      ]
      updateLocalStorage(newStateAdd)

      return newStateAdd

    case 'REMOVE_PRODUCT':

      // quantity is 1 remove item
      if (data.quantity && data.quantity === 1) {
        const newState = state.filter(item => item.id !== data.id)
        updateLocalStorage(newState)
        return newState
      }
      // remove 1 quantity
      const newStateRP = state.map((item) => {
        if (item.id === data.id) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item;
      });
      updateLocalStorage(newStateRP)
      return newStateRP

    case 'REMOVE_FROM_CART':
      const { id } = data
      const newStateRFC = state.filter(item => item.id !== id)
      updateLocalStorage(newStateRFC)
      return newStateRFC
    case 'CLEAR_CART':
      updateLocalStorage([])
      return []

    default:
      return state
  }

}