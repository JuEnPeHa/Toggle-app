import React from 'react';
import Toggle from './Toggle';
import './App.css';

function App() {
  const [toggled, setToggled] = React.useState(false);
  const handleClick = () => {
      setToggled((s) => !s);
  };
  return (
      <div className="App">
          <Toggle toggled={toggled} onClick={handleClick} />
      </div>
  );
}

export default App;
