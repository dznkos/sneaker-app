import React, { useId } from 'react'
import '../style/Cart.css'
import { useCart } from '../hooks/useCart'
import { CartItem } from './CartItem'

export const Cart = () => {


  const { cart, clearCart } = useCart()

  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId} >
        <i className="ri-shopping-cart-line"></i>
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {
            cart.length > 0
            ? cart.map(prod => (
              <CartItem key={prod.id} item={prod} />
            ))
            : <div>
              <p className='text-white'>Tú carrito esta vacío
                <i class="ri-shopping-cart-line px-2"></i>
              </p>
            </div>
          }

        </ul>
        {
          cart.length > 0
          && ( <div className='flex gap-4'>
            <p className='text-white text-sm '>Clear cart</p>
            <button onClick={() => clearCart()} className=''>
              <i class=" ri-delete-bin-fill p-1 text-white bg-red-600 hover:bg-red-700 rounded "></i>
            </button>
          </div> )
        }
        
      </aside>

    </>
  )
}
