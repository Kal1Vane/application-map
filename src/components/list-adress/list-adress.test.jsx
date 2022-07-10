
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { StoreName } from '../../const';
import ListAdressContainer from './list-adress-container';
import { render, screen} from '@testing-library/react';
import { getFakePoints } from '../../mock/mock';

const mockStore = configureMockStore();
const fakeArrayPoints = getFakePoints();


const store = mockStore({
  [StoreName.DATA] : {
    isLoading : false,
    pointsArray : [...fakeArrayPoints],
  }
});

const fakeList = (
  <Provider store={store} >    
    <ListAdressContainer />
  </Provider>
);

describe('Component: List Adress', () => {
  it('should render', () => {
    render(fakeList);
    const title = fakeArrayPoints[2].adressTitle;
    expect(screen.getByText(title)).toBeInTheDocument(); 
  });

});
