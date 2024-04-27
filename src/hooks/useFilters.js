
import { useContext } from 'react'
import { FiltersContext } from '../context/filterContext'

export const useFilters = () => {

  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (listproducts) => {

    return listproducts.filter(product => {

      const searchMatch = filters.search ? product.name?.toLowerCase().includes(filters.search?.toLowerCase()) : true
      const priceMatch = product.price >= filters.minPrice
      const brandMatch = filters.brand === 'all' || product.brand === filters.brand

      return searchMatch && priceMatch && brandMatch
    })
  }
  return { filters, filterProducts, setFilters }
}

