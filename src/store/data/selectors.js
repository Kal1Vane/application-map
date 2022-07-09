import { StoreName } from "../../const";

export const getLoadingData = (state) => state[StoreName.DATA].isLoading;

export const getPoints = (state) => state[StoreName.DATA].pointsArray;

