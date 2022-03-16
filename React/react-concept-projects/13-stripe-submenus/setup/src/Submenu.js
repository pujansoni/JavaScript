import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {isSubmenuOpen, location, page: {page, links}} = useGlobalContext();
  // We also need to setup useRef cause we also need to access the submenu container
  const container = useRef(null);
  // We have introducted the columns useState() to dynamically change how the submenu looks based on the links
  const [columns, setColumns] = useState("col-2");

  // Here whenever the location value changes we would need to invoke the useEffect()
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const {center, bottom} = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if(links.length === 3) {
      setColumns("col-3");
    }
    if(links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);

  return <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
    <h4>{page}</h4>
    <div className={`submenu-center ${columns}`}>
      {links.map((link, index) => {
        const {label, icon, url} = link;
        return <a key={index} href={url}>
          {icon}
          {label}
        </a>
      })}
    </div>
  </aside>
}

export default Submenu
