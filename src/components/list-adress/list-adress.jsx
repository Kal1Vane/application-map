import { useDispatch, useSelector } from "react-redux";
import { getPoints } from "../../store/data/selectors";
import ItemAdress from "../item-adress/item-adress";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { swapPoint } from "../../store/data/data";


function ListAdress() {  
  const points = useSelector(getPoints);
  const dispatch = useDispatch();

  function handleOnDragEnd(result) { 
    if (!result.destination) {
      return;
    }
    const fromIndex = result.source.index;
    const toIndex = result.destination.index;
    dispatch(swapPoint({toIndex,fromIndex}));
   }

  if (points.length === 0){
    return <h4>not point</h4>
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="list-points">
        {(provided) => (
          <div 
          {...provided.droppableProps}
          ref={provided.innerRef}>
          <ul>
            {points.map((item,index) => (
              <ItemAdress 
                index={index} 
                props={item} 
              />
            ))}
            </ul>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ListAdress;
