import "./search-box.styles.scss";
import InputComponent from "../input-component/input.component";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  // implicitni return jer ga nema
  <InputComponent
  className={`search-box ${className}`}
  type="search" // sa "x" na kraju
  placeholder={placeholder}
  onChange={onChangeHandler}
/>
);

export default SearchBox;
