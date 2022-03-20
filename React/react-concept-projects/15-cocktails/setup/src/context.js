import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

// Here we are using the cocktail db and the benefits of the api is that we don't need the api key for authentication and we will be using two methods i.e. "Search cocktail by name" and "Lookup full cocktail details by id" from the link https://thecocktaildb.com/api.php

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // We will setup one useState for the Loading page
  const [loading, setLoading] = useState(true)
  // Here we are using the default text 'a' in the search term as we want to display some values when the page loads initially
  const [searchTerm, setSearchTerm] = useState('a')
  // We will also setup a useState of cocktails which essentially contains the list of cocktails
  const [cocktails, setCocktails] = useState([])

  // We will be calling this function every time we type something in the input
  const fetchDrinks = useCallback(async () => {
    // Here we are using setLoading(true) even though it seems redundant. However, we are using this because the fetchDrinks function is called every time we type something in the input
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const {drinks} = data
      // Here it's important to note that if the drinks is null it doesn't mean that it's an error. It simply means that the searchTerm doesn't match with any drinks being fetched from the api in which case we will display the appropriate message
      if(drinks) {
        const newCocktails = drinks.map((item) => {
          const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item
          return {id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass}
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch(error) {
      console.log(error)
      setLoading(false)
    }
  }, [searchTerm])

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm, fetchDrinks])

  return <AppContext.Provider value={{loading, cocktails, setSearchTerm}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
