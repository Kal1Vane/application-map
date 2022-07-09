import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {normalaizePointServer} from '../../utils/utils';

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchPoint = createAsyncThunk(
  'data/fetchPoint',
  async ({adress,id = null}, thunkApi) => {
    try {
      
      console.log(adress,id)
      const {data} = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${adress}&results=1`);
      const response = {
        coordinate : normalaizePointServer(data),
        id
      }
      return response;
    } catch (e) {
      return thunkApi.rejectWithValue('Not Found');
    }

  },
);