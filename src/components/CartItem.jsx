import React from 'react'
import { useCart } from '../hooks/useCart'

export const CartItem = ({ item }) => {

  const { addToCart, removeProduct, removeFromCart } = useCart()

  return (
    <li>
      <div className='relative'>
        <img className='object-cover' src={item.image} alt={`load from ${item.image}`} />
        <strong>$ {item.price}</strong> 
        <i onClick={() => removeFromCart(item) } class="ri-close-line text-xs absolute px-0.5 -top-1 -right-1 bg-red-500 hover:bg-red-700 rounded-full cursor-pointer"></i>
        
      </div>

      <div className=''>
        <strong>{item.name}</strong>
        <footer>
          <small>Qty: {item.quantity}</small>
          <button onClick={() => addToCart(item)} className='flex justify-center items-center w-6 h-6 bg-blue-500 hover:bg-blue-600' >
            <i class="ri-add-line text-white"></i>
          </button>
          <button onClick={() => removeProduct(item)} className='flex justify-center items-center w-6 h-6 bg-red-500 hover:bg-red-700' >
           <i class="ri-subtract-line text-white"></i>
          </button>
        </footer>
      </div>
    </li>
  )
}
