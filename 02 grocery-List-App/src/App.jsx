import "./App.css";
import { useState } from "react";
import groceryCartImage from "./assets/grocery-cart.png";

// { name: "banana", quantity: 1, completedStatus: true },

// t.b.c 2:13:17 from the findIndex() method ||https://www.youtube.com/watch?v=BWJ01f-s3S4

function App() {
  const [inuptValue, setInputvalue] = useState("");
  const [groceryItems, SetGroceryItems] = useState([]);

  const handleChangeInputvalue = function (e) {
    // console.log(e.target.value);
    setInputvalue(e.target.value);
  };

  const handleAddGroceryItems = function (e) {
    if (e.key === "Enter") {
      if (inuptValue) {
        // console.log(groceryItems);
        const updatedGroceryList = [...groceryItems];
        const indexItem = updatedGroceryList.findIndex(
          (item) => item.name === inuptValue,
        );
        // console.log(indexItem);
        if (indexItem !== -1) {
          updatedGroceryList[indexItem].quantity++;
        } else {
          // console.log(updatedGroceryList);
          updatedGroceryList.push({
            name: inuptValue,
            quantity: 1,
            completedStatus: false,
          });
        }
        SetGroceryItems(updatedGroceryList);
        setInputvalue("");
      }
    }
  };

  const handleRemoveItemsFromList = function (name) {
    // console.log(updatedGroceryList, name);

    // SetGroceryItems([...groceryItems].filter((item) => item.name !== name));
    // dont need to spread as filter already creates a new array. groceryItems ---> array A ----> spread array B -----> filter array C
    SetGroceryItems(groceryItems.filter((item) => item.name !== name));
  };

  const handleUpdateCompleteStatus = (status, indexOfItem) => {
    const updatedGroceryList = [...groceryItems];
    updatedGroceryList[indexOfItem].completedStatus = status;
    SetGroceryItems(updatedGroceryList);
  };

  const renderGroceryListItemMarkup = () => {
    return groceryItems.map((item, idx) => (
      <li key={item.name}>
        <div className="container">
          <div className="container-part-1">
            <input
              type="checkbox"
              onChange={(e) => {
                // console.log(e.target.checked);

                handleUpdateCompleteStatus(e.target.checked, idx);
              }}
              value={item.completedStatus}
              checked={item.completedStatus}
            />
            <p>
              {item.name}{" "}
              {/* {item.quantity > 1 ? <span>x{item.quantity}</span> : null} */}
              {/* I think I am using nullish coalescent operator to short circuit this ?? */}
              {item.quantity > 1 && <span>x{item.quantity}</span>}
            </p>
          </div>
          <div className="container-part-2">
            <button
              className="remove-button"
              onClick={() => {
                handleRemoveItemsFromList(item.name);
              }}
            >
              X
            </button>
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
