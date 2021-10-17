import React, { Component } from "react";
import ColumnChart from "../components/widgets/columnChart";
import DoughnutChart from "../components/widgets/dougnutChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faUser,
  faMoneyBillAlt,
  faHourglass,
} from "@fortawesome/free-solid-svg-icons";

import binService from "../services/binService";

class Dashboard extends Component {
  state = {
    doughnutOptions: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  componentDidMount() {
    this.fetchDashboard();
  }

  fetchDashboard = () => {
    binService.getDashboard().then((data) => {
      // let data = res.data;
      this.setState({
        ...this.state,
        users: data.userSize,
        bins: data.binSize,
        pendingTransactions: data.pendingTransactions,
        completedTransactions: data.completedTransactions,
      });
    });
  };

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    return (
      <div>
        <h3>Dashboard </h3>
        <p className="text-muted ">Welcome to Dashboard</p>

        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body  dashboardCardBody">
                <div className="row">
                  <div className="col-md-2 text-center">
                    <FontAwesomeIcon
                      className="mt-1"
                      icon={faUser}
                      size="2x"
                      color="#625ED7"
                    />
                  </div>
                  <div className="col-md-10 text-left">
                    <h3 className="dashboardHeading">{this.state.users}</h3>
                    <p className="text-muted">No. users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body  dashboardCardBody">
                <div className="row">
                  <div className="col-md-2 text-center">
                    <FontAwesomeIcon
                      className="mt-1"
                      icon={faMoneyBillAlt}
                      size="2x"
                      color="#625ED7"
                    />
                  </div>
                  <div className="col-md-10 text-left">
                    <h3 className="dashboardHeading pl-2">
                      {this.state.completedTransactions}{" "}
                      <small className="text-muted">GH₵</small>
                    </h3>
                    <p className="text-muted">Completed Transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body  dashboardCardBody">
                <div className="row">
                  <div className="col-md-2 text-center">
                    <FontAwesomeIcon
                      className="mt-1"
                      icon={faHourglass}
                      size="2x"
                      color="#625ED7"
                    />
                  </div>
                  <div className="col-md-10 text-left">
                    <h3 className="dashboardHeading pl-2">
                      {this.state.pendingTransactions}{" "}
                      <small className="text-muted">GH₵</small>
                    </h3>
                    <p className="text-muted">Pending Transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body  dashboardCardBody">
                <div className="row">
                  <div className="col-md-2 text-center">
                    <FontAwesomeIcon
                      className="mt-1"
                      icon={faTrashAlt}
                      size="2x"
                      color="#625ED7"
                    />
                  </div>
                  <div className="col-md-10 text-left">
                    <h3 className="dashboardHeading pl-2">{this.state.bins}</h3>
                    <p className="text-muted">No. bins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
