import React from "react";
import MapComponent from "../../components/common/map";

const BinDetail = (props) => {
  const bin = props.location.state || {};

  const BinFull = () => {
    let classStatus =
      bin.isFull === 1
        ? "badge bg-danger text-white ml-4"
        : "badge bg-info text-white ml-4";
    let status = bin.isFull === 1 ? "full" : "empty";
    return <span className={classStatus}>{status}</span>;
  };

  const BinStatus = () => {
    let classStatus = bin.status === 1 ? "text-primary" : "text-danger";
    let status = bin.status === 1 ? "Active" : "Inactive";
    return <span className={classStatus}>{status}</span>;
  };

  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <p className="text-muted ">
                Channel #243 - <BinFull />
              </p>
              <p className="font-weight-bold">Name: {bin.contactName}</p>
              <br />
              <p className="text-muted">Address: {bin.contactAddress}</p>
              <p className="text-muted">Phone: {bin.contactPhone}</p>
              <p className="text-muted">
                Status: <BinStatus />
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <MapComponent bin={bin} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BinDetail;
