import { useState } from "react";
const App = () => {
  const [value, setValues] = useState(0);

  const handleClick = () => {
    setValues(value + 1);    
  };

  return (
    <div className="container">
      <h1>Hola bro!</h1>
      <button type="button" onClick={handleClick}>+1</button>
      <h2>{value}</h2>
    </div>
  );
};

export default App;
