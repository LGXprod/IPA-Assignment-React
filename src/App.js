import React from 'react';
import Banner from 'common/Banner';
import SearchBox from 'common/SearchBox';
import LatestEdition from 'section/LatestEdition';
import MoreArticles from 'section/MoreArticles'
import 'styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="centered-column">
      <Banner />

      <SearchBox />

      <LatestEdition />

      <MoreArticles />
    </div>
  );
}

export default App;
