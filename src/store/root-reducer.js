import {combineReducers} from 'redux'
import { StoreName } from '../const'
import { dataProcess } from './data/data';

export const rootReducer = combineReducers({
  [StoreName.DATA] : dataProcess.reducer,
});