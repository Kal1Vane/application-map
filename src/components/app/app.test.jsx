
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { StoreName } from '../../const';
import App from './app';
import {render, screen} from '@testing-library/react';

const mockStore = configureMockStore();

const store = mockStore({
  [StoreName.DATA] : {
    isLoading : true,
    pointsArray : [],
  }
});


const fakeApp = (
  <Provider store={store} >
    <App />
  </Provider>
);

describe('Application render', () => {

  it('should render', () => {
    render(fakeApp);

    expect(screen.getByText(/Список адресов пуст/i)).toBeInTheDocument();
    expect(screen.getByText(/Введите адрес/i)).toBeInTheDocument();   
  });

});
