import { useSelector } from "react-redux";
import { getPoints } from "../../store/data/selectors";
import { nanoid } from "@reduxjs/toolkit";

function ListAdress() {  
  const points = useSelector(getPoints);
  console.log(points);
  if (points.lenght === 0){
    return <h4>not point</h4>
  }

  return (
    <ul>
      {
        points.map((item) => {
          return (
            <li key={nanoid(10)}>{item}</li>
          )
        })
      }
    </ul>
  )
}

export default ListAdress;
