import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import menu from './data';

// Here we will get the list of buttons from the categories from our menu item dynamically cause there is a change that a new entry along with a new category can also be included in our data in the future
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

// Here the buttons will be dynamic in this project. The buttons will come up from the category property of the items array. The more categoryies we have the more buttons we will see on the screen
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    // Here if we have the category as all then we will display all the menu items
    if(category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
