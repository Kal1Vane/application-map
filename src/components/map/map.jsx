import { useRef } from "react";
import './map.css';
import {
  YMaps, Map as MapComponent,
  Placemark
} from 'react-yandex-maps';

import { useSelector } from "react-redux";
import { getPoints } from "../../store/data/selectors";

import { centerMap } from "../../const";
import { nanoid } from "@reduxjs/toolkit";
const API_KEY = process.env.REACT_APP_API_KEY;

function Map() { 
  const mapRef = useRef(null);
  const points = useSelector(getPoints);

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
            const pointMark = point.split(' ').reverse();

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
              geometry={pointMark}
              modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            />)
          })}                       
        </MapComponent>
      </YMaps>
    </section>
  )
 }
 export default Map;
