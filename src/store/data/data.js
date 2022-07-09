import { StoreName } from "../../const"
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { fetchPoint } from '../api-creators/data-api';

const initialState = {
  isLoading : false,
  pointsArray : [],
}

export const dataProcess = createSlice({
  name: StoreName.DATA,
  initialState,
  reducers : {
    removePoint : (state,action) => {
      state.pointsArray = state.pointsArray.filter((point) => point.id !== action.payload)
    },
  },
  extraReducers : {
    [fetchPoint.fulfilled.type] : (state,action) => {
      const {id, coordinate} = action.payload;
      if(id){
        state.pointsArray.map((point) => {
          if(point.id === id){
           point.adressTitle = coordinate.adressTitle;
           point.point = coordinate.point;
           point.id = id;
          }
        })
      } else {
        state.pointsArray.push(coordinate);
      }
      state.isLoaded = true;
    },
    [fetchPoint.pending.type] : (state) => {
      state.isLoaded = false;
    },
    [fetchPoint.rejected.type] : (state,action) => {
      state.isLoaded = true;
      toast.error(action.payload);
    },
  }
})

export const {removePoint} = dataProcess.actions;