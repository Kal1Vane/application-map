import { useRef } from "react";
import './map.css';
import {
  YMaps, Map as MapComponent,
  Placemark,
  Polyline
} from 'react-yandex-maps';
import { fetchPoint } from "../../store/api-creators/data-api";
import { useDispatch, useSelector } from "react-redux";
import { getPoints } from "../../store/data/selectors";

import { centerMap } from "../../const";
import { nanoid } from "@reduxjs/toolkit";
const API_KEY = process.env.REACT_APP_API_KEY;

function Map() { 
  const mapRef = useRef(null);
  const points = useSelector(getPoints);
  const coordinate = points.map((item) => item.point);
  const dispatch = useDispatch();

  function onChangePoint(evt , id)  {
    const coordinates = evt.get('target').geometry.getCoordinates();
    console.log(coordinates)
    dispatch(fetchPoint({adress: coordinates.reverse(),id})) 
};
  console.log(coordinate)
  return (

    <section className="map-section">
      <h2>Map</h2>
      <YMaps query={{ apikey : API_KEY}} >
        <MapComponent
        className="map"
        instanceRef={mapRef}
        state={centerMap}
         >
          {points.map((item) => {
            const {point,adressTitle,id} = item;
          

           return ( 
            <Placemark 
              className="map__placemark"
               options={{
                preset: "islands#icon",
                iconColor : "#07bc0c",
                draggable: true,
               }}
              key={nanoid(10)}
              properties={{
                balloonContent: adressTitle
              }} 
              geometry={point}
              modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
              onDragEnd={(e) => onChangePoint(e,id)}
            />
            )
          })}           
          <Polyline 
            geometry={coordinate}
            options={{
              balloonCloseButton: false,
              strokeColor: '#e74c3ca8',
              strokeWidth: 4,
              strokeOpacity: 1,
            }}
          />            
        </MapComponent>
      </YMaps>
    </section>
  )
 }
 export default Map;
