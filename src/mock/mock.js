import { address } from 'faker';
import { nanoid } from '@reduxjs/toolkit';

const COUNT_FAKE_POINT = 10;

export const makeFakePoint = () => ({
  adressTitle : address.cityName(),
  point : address.nearbyGPSCoordinate(),
  id: nanoid(10),
})

export const getFakePoints = () => new Array(COUNT_FAKE_POINT).fill(null).map(makeFakePoint);
 