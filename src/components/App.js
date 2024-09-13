import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [str, setStr] = useState("");
  // let str = "";
  function handleClick(e) {
    setStr("Hello " + e.target.value + "!");
    console.log(str);
  }
  return (
    <div>
      {/* Do not remove the main div */}
      Enter you name:
      <br />
      <br />
      <input type="text" onChange={handleClick} />
      <p>{str}</p>
    </div>
  );
};

export default App;
