import { useDispatch } from "react-redux";
import { removePoint } from "../../store/data/data";
import { Draggable } from "react-beautiful-dnd";

function ItemAdress({props,index}) { 
  const {adressTitle,id} = props;

  const dispatch = useDispatch();

  return (
    <Draggable key={id} draggableId={id} index={index}>
        {(provided) => (
          <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          key={id}>
            <h3>{adressTitle}</h3>
            <button 
            onClick={() =>  {
              dispatch(removePoint(id))
            }} 
            type="button">Close</button>
          </li>
        )}
    </Draggable>
  )
 }

 export default ItemAdress;
