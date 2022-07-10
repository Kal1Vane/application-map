import { getFakePoints, makeFakePoint } from '../../mock/mock';
import { removePoint,swapPoint,dataProcess } from './data';

describe('Test Reducer: Data Reducer', () => {
  it('remove point', () => {
    const fakePoint = makeFakePoint();
    const fakeArrayPoint = getFakePoints();
 
    const state = {
      pointsArray : [fakePoint,...fakeArrayPoint],
    }

    expect(dataProcess.reducer(state,removePoint(fakePoint.id)))
      .toEqual({
        pointsArray : [...fakeArrayPoint],
      });
  });
  it('swap point', () => {
    const firstPoint = makeFakePoint();
    const secondPoint = makeFakePoint();

    const state = {
      pointsArray : [firstPoint,secondPoint],
    };
    const expectArray = [secondPoint,firstPoint];
    expect(dataProcess.reducer(state,swapPoint({
      toIndex: 0,
      fromIndex: 1,
    })))
      .toEqual({
        pointsArray : expectArray,
      });
  });
});
