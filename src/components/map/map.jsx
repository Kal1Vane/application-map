import { useRef } from "react";
import './map.css';
import {
  YMaps, Map as MapComponent,
  Placemark,
  Polyline
} from 'react-yandex-maps';

import { useSelector } from "react-redux";
import { getPoints,getCordinate } from "../../store/data/selectors";

import { centerMap } from "../../const";
import { nanoid } from "@reduxjs/toolkit";
const API_KEY = process.env.REACT_APP_API_KEY;

function Map() { 
  const mapRef = useRef(null);
  const points = useSelector(getPoints);
  const coordinate = useSelector(getCordinate);
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
            const {point,adressTitle} = item;
          

           return ( <Placemark 
              className="map__placemark"
               options={{
                preset: "islands#icon",
                iconColor : "#07bc0c",
               }}
              key={nanoid(10)}
              properties={{
                balloonContent: adressTitle
              }} 
              geometry={point}
              modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            />)
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
