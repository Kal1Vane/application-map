import { useDispatch, useSelector } from "react-redux";
import { getLoadingData, getPoints } from "../../store/data/selectors";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { swapPoint } from "../../store/data/data";
import { ListAdress } from "./list-adress";
import './list-adress.css';

function ListAdressContainer() {  
  const points = useSelector(getPoints);
  const isLoading = useSelector(getLoadingData);

  const dispatch = useDispatch();

  function handleOnDragEnd(result) { 
    if (!result.destination){return;}
    const fromIndex = result.source.index;
    const toIndex = result.destination.index;
    if(fromIndex === toIndex) {return;}
    dispatch(swapPoint({toIndex,fromIndex}));
   }

  if (points.length === 0){
    return <h4 className="list-title">Список адресов пуст</h4>
  }

  return (
    <>
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="list-adress">
        {(provided) => (
          <ul
          className="list-adress" 
          {...provided.droppableProps}
          ref={provided.innerRef}>
            <ListAdress points={points} />
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
    {isLoading && <h4>Loading...</h4>}
    </>
  )
}

export default ListAdressContainer;
