import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if(list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  // The name value is going to be used in the form 
  const [name, setName] = useState("");
  // The list is going to contain the values in the local storage
  const [list, setList] = useState(getLocalStorage());
  // There is a flag that indicate if we are editing
  const [isEditing, setIsEditing] = useState(false);
  // The editID will contain the ID which we are actually editing
  const [editID, setEditID] = useState(null);
  // The alert is use to display the alert messages and it will be an object as we will pass some values to the alert
  const [alert, setAlert] = useState({show: false, msg: "", type: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) {
      // display alert
      showAlert(true, "danger", "please enter value");
    } else if(name && isEditing) {
      // deal with edit
      setList(list.map((item) => {
        if(item.id === editID) {
          return {...item, title: name};
        }
        return item;
      }));
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      // show alert
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name};
      setList([...list, newItem]);
      setName("");
    }
  }

  const showAlert = (show=false, type="", msg="") => {
    // Here the line below is equivalent to setAlert({show:show, type:type, msg:msg}) as per ES6
    setAlert({show, type, msg});
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  }

  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  }

  // We will use the localstorage setItem() method which will be changed every time the list is changed and we will use the useEffect() method in order to make sure the local storage is updated
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    // The section will contain a form and a list and we will display the list only if we have some items present inside the list
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {/* Here we are passing all the properties of the alert object to the Alert component by destructuring the alert object */}
        {/* Here we are passing the list as the prop to the Alert component because we need to make sure that the useEffect in the Alert component renders every time the list is updated */}
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g. eggs" value={name} onChange={(e) => setName(e.target.value)}/>
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && 
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>clear items</button>
        </div>
      }
    </section>
  );
}

export default App
