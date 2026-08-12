// import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="parent-container">
        <div className="amount-container">
          <h1>
            <span>+</span> 5000
          </h1>
        </div>
        <div className="inputs-container">
          {/* inputs section starts here */}
          <div className="inputs">
            <input type="text" placeholder="Income or Expense..." />
            <input type="text" placeholder="Amount..." />
            <select id="income-expense" name="income">
              <option value="income">Income</option>
              <option value="income">Expense</option>
            </select>
            <button className="button">+</button>
          </div>
          {/* inputs section ends here */}
        </div>
      </div>
    </>
  );
}

export default App;
