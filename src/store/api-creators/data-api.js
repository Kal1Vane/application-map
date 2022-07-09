import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {normalaizePointServer} from '../../utils/utils';

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchPoint = createAsyncThunk(
  'data/fetchPoint',
  async (adress, thunkApi) => {
    try {
      const {data} = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${adress}&results=1`);
      return normalaizePointServer(data);
    } catch (e) {
      return thunkApi.rejectWithValue('Not Found');
    }

  },
);