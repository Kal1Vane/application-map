import { useEffect } from "react";
import './map.css';
function Map() { 
  
  function init(){
      var myMap = new ymaps.Map("map", {
          center: [55.76, 37.64],
          zoom: 7
      });
  }

  useEffect(() => {
    ymaps.ready(init);
  },[])

  return (

    <section className="map-section">
      <h2>Map</h2>
      <div id="map"></div>
    </section>
  )
 }
 export default Map;
