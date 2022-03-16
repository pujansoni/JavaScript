import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {
  return (
    <>
      {/* In order to show/hide the components we need to pass values to the prop and we will use the prop drilling in order to do so, as we saw before we can use the context API in order to overcome this problem of avoiding fat containers and we will use the context.js for that */}
      <Home />
      <Modal />
      <Sidebar />
    </>
  )
}

export default App
