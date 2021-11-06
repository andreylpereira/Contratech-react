import "./Card.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div className="page pt-4">
      <div className="card card-border shadow container-fluid">
        <div className="card-body">
          <h3 className="card-title font-weight-bold">{props.titulo}</h3>
          {props.children}
        </div>
      </div>
    </div>
  );
};
