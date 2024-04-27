import React, { useEffect, useState } from 'react'
import { default as initialState } from '../result_api.json'

import { Products } from '../components/Products'
import { BarSearch } from '../components/BarSearch'
import { useFilters } from '../hooks/useFilters'
import { Cart } from '../components/Cart'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'

export const Offers = () => {

  const [products, setProducts] = useState(initialState)
  const { filters, filterProducts } = useFilters()

  useEffect(() => {
    // Guardar el estado products en el localStorage cada vez que se actualice
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  const filteredProducts = filterProducts(products)

  return (
    <>
      <div className='w-full m-auto max-w-[960px] text-2xl bg-black p-3 my-5'>
        <h1 className='text-white text-center'>SUMMER OFFERS 30% </h1>
      </div>
      <BarSearch />
      <Products products={filteredProducts} />

    </>
  )
}
