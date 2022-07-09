import { useSelector } from "react-redux";
import { getPoints } from "../../store/data/selectors";
import { nanoid } from "@reduxjs/toolkit";


function ListAdress() {  
  const points = useSelector(getPoints);

  if (points.lenght === 0){
    return <h4>not point</h4>
  }

  return (
    <ul>
      {
       points.map((item) => {
          return (
            <li key={nanoid(10)}>{item.adressTitle}</li>
          )
        }) 
      }
    </ul>
  )
}

export default ListAdress;
