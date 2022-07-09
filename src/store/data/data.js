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
    }
  },
  extraReducers : {
    [fetchPoint.fulfilled.type] : (state,action) => {
      state.pointsArray = action.payload;
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