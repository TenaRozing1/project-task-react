import "./search-box.styles.scss";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  // implicitni return jer ga nema
  <input
    className={`search-box ${className}`}
    type="search" // ovaj type omogucava "x" u input fieldu
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
