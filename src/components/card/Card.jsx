/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Card.css'

export default (props) => {
  return (
    <div>
    <div className="card shadow container-fluid w-75 mb-5">
        <div className="card-body">
            <h3 className="card-title font-weight-bold">{props.title}</h3>
        </div>
        
    </div>
    </div>
  );
}