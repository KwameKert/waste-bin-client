import React, { Component } from "react";
import ColumnChart from "../components/widgets/columnChart";
import DoughnutChart from "../components/widgets/dougnutChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt, faHandshake } from "@fortawesome/free-solid-svg-icons";

class Dashboard extends Component {
  state = {
    doughnutOptions: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}

  render() {
    return (
      <div>
        <h3>Dashboard </h3>
        <p className="text-muted ">Welcome to Dashboard</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>Bin activity</p>
                    <DoughnutChart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>Users activity</p>
                    <ColumnChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body  dashboardCardBody">
                <div className="row">
                  <div className="col-md-2 text-center">
                    <FontAwesomeIcon
                      className="mt-1"
                      icon={faReceipt}
                      size="2x"
                      color="#625ED7"
                    />
                  </div>
                  <div className="col-md-7 text-left">
                    <h3 className="dashboardHeading">$0</h3>
                    <p className="text-muted">Earned this month.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-3">
              <div className="card-body dashboardCardBody">
                <div className="row">
                  <div className="col-md-2 text-center">
                    <FontAwesomeIcon
                      className="mt-1"
                      icon={faHandshake}
                      size="2x"
                      color="#39B4F6"
                    />
                  </div>
                  <div className="col-md-7 text-left">
                    <h3 className="dashboardHeading">10</h3>
                    <p className="text-muted">New Clients.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="card mt-3">
              <div className="card-body dashboardCardBody">
                <div className="row">
                  <div className="col-md-2 text-center">
                    <FontAwesomeIcon
                      className="mt-1"
                      icon={faHandshake}
                      size="2x"
                      color="#39B4F6"
                    />
                  </div>
                  <div className="col-md-7 text-left">
                    <h3 className="dashboardHeading">128</h3>
                    <p className="text-muted">New Clients.</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
