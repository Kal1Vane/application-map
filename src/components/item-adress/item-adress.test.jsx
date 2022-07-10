
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { StoreName } from '../../const';
import ItemAdress from './item-adress';
import { render, screen} from '@testing-library/react';
import { makeFakePoint } from '../../mock/mock';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { removePoint } from '../../store/data/data';

const mockStore = configureMockStore();
const fakePoint = makeFakePoint();


const store = mockStore({
  [StoreName.DATA] : {
    isLoading : true,
    pointsArray : [fakePoint],
  }
});

const origDispatch = store.dispatch;
store.dispatch = jest.fn(origDispatch);


const fakeItem = (
  <Provider store={store} >    
     <DragDropContext>
      <Droppable droppableId="list-adress">
        {(provided) => (
          <ul
          className="list-adress" 
          {...provided.droppableProps}
          ref={provided.innerRef}>
            <ItemAdress index={0} props={fakePoint} />
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  </Provider>
);

describe('Component: Item Adress', () => {

  it('should render', () => {
    render(fakeItem);
    const title = fakePoint.adressTitle;
    expect(screen.getByText(title)).toBeInTheDocument(); 
  });
  it('test for dispatch', () => {
    render(fakeItem);

    screen.getByText("delete").click();
    expect(store.dispatch).toHaveBeenCalledWith(removePoint(fakePoint.id))
  })
});
