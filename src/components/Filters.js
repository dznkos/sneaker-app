import React, { useCallback, useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import debounce from 'just-debounce-it'

export const Filters = () => {

  const minPriceFilterId = useId()
  const brandFilterId = useId()
  const searchFilterId = useId()

  const { filters, setFilters } = useFilters()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeBrand = (event) => {
    setFilters(prevState => ({
      ...prevState,
      brand: event.target.value
    }))
  }

  const handleChangeSearch = (event) => {
    const search = event.target.value
    setFilters(prevState => ({ ...prevState, search }))
  }


  return (
    <section className='flex items-center justify-evenly text-xs font-semibold'>

      <div>
        <div className="flex relative">
          <button className='absolute inset-y-1 left-2'><i className="text-black ri-search-line"></i></button>
          <input
            className='rounded-full ps-6 text-black p-1 border-solid border-gray-200 border-2 
            outline-none focus:outline-3 focus:border-red-400 focus:border-red '
            type="text"
            id={searchFilterId}
            placeholder="Buscar producto..."
            onChange={handleChangeSearch}
            value={filters.search} />
        </div>
      </div>

      <div>
        <label htmlFor="price">Minimum Price </label>
        <input
          type="range"
          name="price"
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice} />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label className='px-2' htmlFor="brand">Brands</label>
        <select className='w-16' id={brandFilterId} onChange={handleChangeBrand}>
          <option value="all">All</option>
          <option value="adidas">Adidas</option>
          <option value="nike">Nike</option>
          <option value="puma">Puma</option>
        </select>
      </div>


    </section>
  )
}
