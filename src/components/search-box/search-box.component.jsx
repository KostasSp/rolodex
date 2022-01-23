import "./search-box.styles.css";

//this looked weird, but it's the same as passing "props" without {}, and then doing props.placeholder and
//props.handleChange. This could be useful for when I don't want to pass all props though
export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="search">
      <input type="search" placeholder={placeholder} onChange={handleChange} />
      {console.log(typeof handleChange)}
    </div>
  );
};
