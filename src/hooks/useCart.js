import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'

export const useCart = () => {

  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be userd withi a cartProvider')
  }

  return context

}
