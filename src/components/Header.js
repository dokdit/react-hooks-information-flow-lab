import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <div className={`Header ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h2>Shopper</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
    </div>
  );
}

export default Header;
