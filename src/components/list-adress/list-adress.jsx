import { useDispatch, useSelector } from "react-redux";
import { removePoint } from "../../store/data/data";
import { getPoints } from "../../store/data/selectors";



function ListAdress() {  
  const points = useSelector(getPoints);
  const dispatch = useDispatch();

  if (points.length === 0){
    return <h4>not point</h4>
  }

  return (
    <ul>
      {
       points.map((item) => {
        const {id,adressTitle} = item;
          return (
            <li key={id}>
            <h3>{adressTitle}</h3>
            <button onClick={() =>  {
              dispatch(removePoint(id))
            }} type="button">Close</button>
            </li>
          )
        }) 
      }
    </ul>
  )
}

export default ListAdress;
