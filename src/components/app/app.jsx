import React from "react";
import ListAdress from "../list-adress/list-adress";
import Map from "../map/map";
import SearchInput from "../search-input/search-input";

function App() {
  return (
    <section className="app-section">
      <div className="map-container">
        <Map />
      </div>
      <React.StrictMode>
        <div className="content-container">
          <SearchInput />
          <ListAdress />
        </div>
      </React.StrictMode>
    </section>
  );
}

export default App;
