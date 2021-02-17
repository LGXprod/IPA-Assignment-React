import React from 'react';
import Banner from 'common/Banner';
import SearchBox from 'common/SearchBox';
import LatestEdition from "section/LatestEdition";
import "styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="centered-column">
      <Banner />

      <SearchBox />

      <LatestEdition />
    </div>
  );
}

export default App;
