/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Breadcrumb.css";

export default (props) => {
  const unique = props.unique;

  return unique != null ? 
  (
    <div>
      <div className="pt-5"></div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light shadow w-75 container-fluid">
          <li className="breadcrumb-item active">       
              {props.unique}
          </li>
        </ol>
      </nav>
    </div>
  ) 
  :
   (
    <div>
      <div className="pt-5"></div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light shadow w-75 container-fluid">
          <li className="breadcrumb-item">
            <a className="text-dark" href={props.router}>
              {props.item}
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {props.active}
          </li>
        </ol>
      </nav>
    </div>
  );
};