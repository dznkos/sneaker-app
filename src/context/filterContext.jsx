import { createContext, useState } from "react";

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {

  const [filters, setFilters] = useState({
    brand: 'all',
    minPrice: 0,
    search: null
})

  return (
    <FiltersContext.Provider value={{ filters, setFilters}} >
      { children }
    </FiltersContext.Provider>
  )
}