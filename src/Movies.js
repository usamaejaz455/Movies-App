import React from 'react'

const Movies = (props) => {
  return (
    <div>
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={props.imgurl}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Title: {props.title}</h5>
        <p className="card-text"><span style={{ fontWeight: 'bold' }}>Genre:</span> {props.description}...</p>
      </div>
    </div>
  </div>
);
}

export default Movies
