import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="search-section">

      <div className="search-box">

        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search schemes by name, keyword or category..."
        />

      </div>

    </div>
  );
}

export default SearchBar;