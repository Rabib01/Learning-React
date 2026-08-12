import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";

// function App() {
//   const [text, setText] = useState("Posts");
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${text}`)
//       .then((response) => response.json())
//       .then((json) => setItems(json));
//   }, [text]);

//   return (
//     <div>
//       <div className="button-container">
//         <button onClick={() => setText("Posts")}>Posts</button>
//         <button onClick={() => setText("Users")}>Users</button>
//         <button onClick={() => setText("Comments")}>Comments</button>
//       </div>
//       <div className="text-container">
//         <h1>{text}</h1>
//       </div>
//       <div>
//         <ul>
//           {items.map((item) => {
//             return (
//               <li>
//                 <pre> {JSON.stringify(item)} </pre>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  return <div>{windowWidth}</div>;
}

export default App;
