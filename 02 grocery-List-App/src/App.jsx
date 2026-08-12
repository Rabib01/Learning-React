import "./App.css";
import { useState, useEffect } from "react";
// import { useState, useEffect } from "react"; These two hooks are the oones that we are going to be seeign throughout react journey
import groceryCartImage from "./assets/grocery-cart.png";

// { name: "banana", quantity: 1, completedStatus: true },
// use effect : sp[ecify which tiems we want to listen to]
// adding an item, removing an item, changing and item, anytime any of these events occurs, use the callback inside of the useState
// t.b.c 2:32:55 from the findIndex() method ||https://www.youtube.com/watch?v=BWJ01f-s3S4

function App() {
  const [inuptValue, setInputvalue] = useState("");
  const [groceryItems, SetGroceryItems] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    determineCompletedStatus();
  }, [groceryItems]);

  const handleChangeInputvalue = function (e) {
    // console.log(e.target.value);
    setInputvalue(e.target.value);

    /**
     * These are instances that we need to worry about 
     * const handleChangeInputvalue = function (e) {
        setInputvalue(e.target.value);
        fetchProducts(e.target.value);
      };
      * This is production quality code 
      * we wouldhave needed to worry only if all keystrokes were making network requests
     */
  };

  const determineCompletedStatus = function () {
    // forEach is a great option most of the times because it does not mutat e the original array
    // 1st -> Check whether the grocery list is empty
    if (!groceryItems.length) {
      return setIsCompleted(false);
    }
    // 2nd ->
    // every() Would have been better here
    /**
    * Worst-case complexit
    Here's something interviewers love.
    In the worst case, if  every item is completed:
    forEach → O(n)
    .every() → O(n)
    So the Big-O notation is the same.
    But in the average or best case, .every() can be much faster because it may stop early.
 */
    let isAllCompleted = true;
    groceryItems.forEach((item) => {
      if (!item.completedStatus) isAllCompleted = false;
    });
    setIsCompleted(isAllCompleted);
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
        SetGroceryItems(updatedGroceryList); // -> these are async calls and so the line determineCompletedStatus() gets used later
        setInputvalue("");
        // determineCompletedStatus(); // async call
      }
    }
  };

  const handleRemoveItemsFromList = function (name) {
    // console.log(updatedGroceryList, name);

    // SetGroceryItems([...groceryItems].filter((item) => item.name !== name));
    // dont need to spread as filter already creates a new array. groceryItems ---> array A ----> spread array B -----> filter array C
    SetGroceryItems(groceryItems.filter((item) => item.name !== name));
    // determineCompletedStatus();
  };

  const handleUpdateCompleteStatus = (status, indexOfItem) => {
    const updatedGroceryList = [...groceryItems];
    updatedGroceryList[indexOfItem].completedStatus = status;
    SetGroceryItems(updatedGroceryList);
    // determineCompletedStatus();
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
        {isCompleted && <h4 className="success">You're Done</h4>}
        {/* No ternary operators were used here, */}
        {/* && returns the first falsy value. A value is falsy if the Boolean(value returns false). If all are truthy then it will return the last value */}
        {/* || retruns the first truthy value or it returns the last one if all are truthy */}
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
