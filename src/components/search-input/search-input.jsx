import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchPoint } from "../../store/api-creators/data-api";

function SearchInput() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  function onSubmit(){
    if(inputRef){
      console.log( inputRef.current.value); 
      const value = inputRef.current.value;
      dispatch(fetchPoint(value));
    }
  }

  return (
    <>
    <input ref={inputRef} type={'text'} className="input__search" />
      <button onClick={onSubmit} type="button">
        Test Search
      </button>
    </>

  )
}

export default SearchInput;
