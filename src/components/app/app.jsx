import React from "react";
import ListAdressContainer from "../list-adress/list-adress-container";
import Map from "../map/map";
import SearchInput from "../search-form/search-form";
import './app.css';

function App() {
  return (
    <section className="app-section">
      <React.StrictMode>
        <div className="content-container">
          <SearchInput />
          <ListAdressContainer />
        </div>
      </React.StrictMode>
      <div className="map-container">
        <Map />
      </div>
    </section>
  );
}

export default App;
