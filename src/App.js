import React from 'react';
import Banner from 'common/Banner';
import SearchBox from 'common/SearchBox';
import "styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="centered-column">
      <Banner />

      <SearchBox />
    </div>
  );
}

export default App;
