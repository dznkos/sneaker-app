
import { createContext, useReducer, useState} from 'react'
import { act } from 'react-dom/test-utils'
import { cartInitialState, cartReducer} from '../reducers/cart'

export const CartContext = createContext()


function useCartReducer() {

  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      data: product
    })
  }

  const removeProduct = id => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      data: id
    })
  }

  const removeFromCart = id => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      data: id
    })
  }

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART'
    })
  }

  return {
    state,
    addToCart,
    removeProduct,
    removeFromCart,
    clearCart
  }

}

export function CartProvider ({children}) {
  
  const { state, addToCart, removeProduct, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      removeProduct,
      clearCart
    }}
    >
      { children }
    </CartContext.Provider>
  )
}