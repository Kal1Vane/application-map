
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { StoreName } from '../../const';
import { render, screen} from '@testing-library/react';
import { getFakePoints } from '../../mock/mock';
import SearchForm from './search-form';
import userEvent from '@testing-library/user-event'

const mockStore = configureMockStore();
const fakeArrayPoints = getFakePoints();


const store = mockStore({
  [StoreName.DATA] : {
    isLoading : false,
    pointsArray : [...fakeArrayPoints],
  }
});

const origDispatch = store.dispatch;
store.dispatch = jest.fn(origDispatch);

const fakeForm = (
  <Provider store={store} >    
    <SearchForm />
  </Provider>
);

describe('Component: Search Form', () => {
  it('should render', () => {
    render(fakeForm);

    expect(screen.getByText("Введите адрес")).toBeInTheDocument(); 

  });
  it('test add point', () => {
    render(fakeForm);

    const input = screen.getByPlaceholderText("Адрес");
    userEvent.type(input, 'Москва{enter}');
    
    expect(store.dispatch).toHaveBeenCalled();
    expect(input.value).toBe('');
  })

});
