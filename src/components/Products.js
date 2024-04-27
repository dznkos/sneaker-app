import React from 'react'
import { useCart } from '../hooks/useCart'
import { Link } from 'react-router-dom'

export const Products = ({ products }) => {

  const { addToCart } = useCart()

  return (
    <section className='w-full grid m-0 p-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 '>

      {
        products.map(product => (
          <div key={product.id} className='flex max-w-[420px] md:max-w-[250px] mx-auto flex-col justify-between gap-3 bg-blue-50 rounded p-4'>

            <div>
              <span className='w-full items-center rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 bg-black/90'>{product.brand}</span>
            </div>

            <figure className=' bg-black mb-3'>
              <img
                className='w-full h-full object-cover hover:scale-110 transition duration-200 ease-in'
                src={product.image}
                alt={`Imagen cargada desde:${product.image}`} />
            </figure>

            <div className='flex flex-col items-center gap-4'>
              <div>
                <Link to={`/products/${product.id}`}>
                  {product.name}
                </Link>
              </div>
              <div className='font-medium text-white'>
                <strong className='px-2.5 py-1 bg-red-700 '>S/. {product.price}</strong>
              </div>
              <div>
                <button className='rounded px-1.5 bg-blue-400 hover:bg-blue-600' onClick={() => addToCart(product)}>
                  <i class="ri-add-line text-white"></i>
                </button>
              </div>
            </div>
          </div>
        ))
      }

    </section>
  )
}
