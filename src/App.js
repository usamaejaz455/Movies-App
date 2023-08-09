import React from 'react';
import Movies from './Movies';
import Header from './Header'
import movies from './movies.json';

const App = () => {
  return (
    <div className='container-fluid'>
    <Header/>
      <div className='row justify-content-around align-items-center my-2' style={{ height: 'calc(100% - 60px)' }}>
        {movies.map((element) => (
          <div className='col-md-4 mb-4 d-flex justify-content-center'>
            <Movies
              title={element.Title}
              description={element.Genre}
              imgurl={element.Image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
