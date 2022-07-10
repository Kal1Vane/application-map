import { useDispatch } from "react-redux";
import { removePoint } from "../../store/data/data";
import { Draggable } from "react-beautiful-dnd";
import './item-adress.css';

function ItemAdress({props,index}) { 
  const {adressTitle,id} = props;

  const dispatch = useDispatch();

  return (
    <Draggable key={id} draggableId={id} index={index}>
        {(provided) => (
          <li
          className="list-item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          key={id}>
            <h3 className="item-title">{adressTitle}</h3>
            <button 
            onClick={() =>  {
              dispatch(removePoint(id))
            }} 
            
            className="item-button"
            type="button">delete</button>
          </li>
        )}
    </Draggable>
  )
 }

 export default ItemAdress;
