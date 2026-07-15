import "./App.css";
import { useState } from "react";
import groceryCartImage from "./assets/grocery-cart.png";

// { name: "banana", quantity: 1, completedStatus: true },

function App() {
  const [inuptValue, setInputvalue] = useState("");
  const [groceryItems, SetGroceryItems] = useState([]);

  const handleChangeInputvalue = function (e) {
    setInputvalue(e.target.value);
  };

  const handleAddGroceryItems = function (e) {
    if (e.key === "Enter") {
      if (inuptValue) {
        SetGroceryItems([
          ...groceryItems,
          { name: inuptValue, quantity: 1, completedStatus: false },
        ]);
        setInputvalue(" ");
      }
    }
  };

  const renderGroceryListItemMarkup = () => {
    return groceryItems.map((item) => (
      <li key={item.name}>
        <div className="container">
          <div className="container-part-1">
            <input type="checkbox" />
            <p>{item.name}</p>
          </div>
          <div className="container-part-2">
            <button className="remove-button">X</button>
          </div>
        </div>
      </li>
    ));
  };

  return (
    <main className="App">
      <div className="">
        <h4 className="success">You're Done</h4>
        <div className="header">
          <h1>Shopping List</h1>
          {/* {JSON.stringify(groceryItems)} To understand */}
          <img src={groceryCartImage} alt="" />
          <input
            type="text"
            placeholder="Add an item"
            className="item-input"
            onChange={handleChangeInputvalue}
            value={inuptValue}
            onKeyDown={handleAddGroceryItems}
          />
        </div>
        <div>
          <ul>{renderGroceryListItemMarkup()}</ul>
        </div>
      </div>
    </main>
  );
}

export default App;
