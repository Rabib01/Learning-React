import "./App.css";
import groceryCartImage from "./assets/grocery-cart.png";

function App() {
  return (
    <main className="App">
      <div className="">
        <h4 className="success">You're Done</h4>
        <div className="header">
          <h1>Shopping List</h1>
          <img src={groceryCartImage} alt="" />
          <input type="text" placeholder="Add an item" />
        </div>
        <div>
          <ul>
            <li>
              <div className="container">
                <input type="checkbox" />
                <p>Carrots</p>
                <button className="remove-button">x</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
