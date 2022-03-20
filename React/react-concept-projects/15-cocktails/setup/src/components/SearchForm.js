import React from 'react'
import { useGlobalContext } from '../context'
export default function SearchForm() {
  // Here we will use the setSearchTerm function coming up from the context.js and we will invoke the function everytime we type something on the search field. Moreover, we will pass the current input value present in the setSearchTerm function
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          {/* Here everytime a user type something in the input we want to invoke setSearchTerm which in turn will invoke the useEffect but now offcourse while fetching the data the value is changed to whatever it is that we are typing */}
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}