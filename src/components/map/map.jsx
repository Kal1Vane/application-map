import { useRef } from "react";
import './map.css';
import {
  YMaps, Map as MapComponent,
} from 'react-yandex-maps';

import { centerMap } from "../../const";

const API_KEY = process.env.REACT_APP_API_KEY;

function Map() { 
  const mapRef = useRef(null);


  return (

    <section className="map-section">
      <h2>Map</h2>
      <YMaps query={{ apikey : API_KEY}} >
        <MapComponent
        className="map"
        instanceRef={mapRef}
        state={centerMap}
         >
  
        </MapComponent>
      </YMaps>
    </section>
  )
 }
 export default Map;
