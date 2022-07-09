import { useSelector } from "react-redux";
import { getLoadingData } from "../../store/data/selectors";

function ListAdress() {  
  const loading = useSelector(getLoadingData);
  console.log(loading)
  return (
    <ul>
      <li>Россия,Москва</li>
    </ul>
  )
}

export default ListAdress;
