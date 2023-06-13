import React, { useState } from 'react';
import './App.css';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <h2>Should you use a dropdown?</h2>
      <button className={`dropdown-button ${isOpen ? 'open' : ''}`}>
        Dropdown
        <span className="arrow">&#9660;</span>
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item) => (
            <li key={item} onClick={() => handleOptionClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

function App() {
  const items = ['Yes', 'Probably not'];

  return (
    <div className="App">
      <Dropdown items={items} />
    </div>
  );
}

export default App;
