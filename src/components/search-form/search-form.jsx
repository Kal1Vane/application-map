import { useRef,useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPoint } from "../../store/api-creators/data-api";
import './search-form.css';

function SearchForm() {

  const [isError,setError] = useState(false);
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  function onChangeInput(){
    setError(false);
  }

  function onSubmitSearch(evt){
    evt.preventDefault();
    if(!inputRef.current){return;}

    const value = inputRef.current.value;

    if(value.length >= 2){
      dispatch(fetchPoint({adress: value}));
      inputRef.current.value = '';
    } else {
      setError(true);
    }    
  }

  return (
    <form 
    className="search__form"
    onSubmit={onSubmitSearch}>
    <h5 className="form__title">Введите адрес</h5>
    <div className="form__input-wrapper">
      <span className="form__input-icon"></span>
      <input 
      placeholder="Адрес"
      className={isError ? "form__input error" : "form__input" }
      ref={inputRef} 
      onChange={onChangeInput} 
      type={'text'} 
     />
      {isError && <span className="form__error">Введите больше символов</span>}
    </div>
    </form>

  )
}

export default SearchForm;
