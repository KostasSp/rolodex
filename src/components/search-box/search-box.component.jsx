import "./search-box.styles.css";

//Below is the same as passing "props" without {}, and then doing props.placeholder and
//props.handleChange. This could be useful for when I don't want to pass all props though. This is called
//destructuring
export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="form-wrapper">
      <input
        type="search"
        id="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
      {console.log(typeof handleChange)}
    </div>
  );
};
