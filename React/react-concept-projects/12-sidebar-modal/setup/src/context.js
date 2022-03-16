import React, { useState, useContext } from 'react'
import App from './App';

// Here we will wrap the whole app in the context.js
const AppContext = React.createContext();
// We will only use the Provider part of the context api as we discussed in the tutorial

// Here as we are wrapping the whole app inside the AppProvider we will use the children argument and return it cause we need to display the content inside the AppProvider which in this case is the whole app as we can see in the index.js. If we were to remove the children then we won't be able to see anything
const AppProvider = ({children}) => {
    // Here we will setup two state values one for the sidebar and one for the modal
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Here we will have four functions. Two functions for opening/closing the sidebar and two functions for opening/closing the modal
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return <AppContext.Provider value={{isModalOpen, isSidebarOpen, openModal, openSidebar, closeModal, closeSidebar}}>{children}</AppContext.Provider>
}

// custom hook - the hook name should start with use obviously
export const useGlobalContext = () => {
    return useContext(AppContext);
}

// We will need to export both AppContext and the AppProvider and we will use the AppProvider in the index.js
export {AppContext, AppProvider}
