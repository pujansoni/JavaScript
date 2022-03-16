import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({page: "", links: []});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }
  const openSubmenu = (text, coordinates) => {
    // Here we need to add the inline CSS in the Submenu.js file where we need to use the coordinates in order to resize the submenu
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  }
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  }
  
  return <AppContext.Provider value={{isSubmenuOpen, isSidebarOpen, openSidebar, openSubmenu, closeSidebar, closeSubmenu, location, page}}>
    {children}
  </AppContext.Provider>
}

// Setting up the custom hook as mentioned in the project 12 where we are exporting the context
export const useGlobalContext = () => {
  return useContext(AppContext);
}
