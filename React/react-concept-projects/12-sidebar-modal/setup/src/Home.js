import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'

const Home = () => {
  // Here we will have access to the value prop by using the useContext() first and then the AppContext as given below, but we can alternatively use the custom hook inside the context.js itself where we will have access to the both the useContext and the AppContext and we can then import the custom hook wherever we need it. This will reduce the overall imports
  // const data = useContext(AppContext);
  // using the custom hooks as given below
  // const data = useGlobalContext();
  const {openSidebar, openModal} = useGlobalContext();
  return <main>
    <button className="sidebar-toggle" onClick={openSidebar}>
      <FaBars />
    </button>
    <button className="btn" onClick={openModal}>
      show modal
    </button>
  </main>
}

export default Home
