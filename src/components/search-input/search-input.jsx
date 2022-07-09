import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchPoint } from "../../store/api-creators/data-api";

function SearchInput() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function onSubmit(){
    if(inputRef){
      const value = inputRef.current.value;
      dispatch(fetchPoint({adress: value}));
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
