import React, { Component } from 'react';
import _ from "lodash";
import binservice from "../../services/binService";
import BinTable from './components/binTable';

class Bin extends Component {
    state = {
        sortColumn: { path: "id", order: "asc" },
        bins: [],
      };
      componentDidMount() {
        this.fetchBins();
      }
    
      fetchBins = async () => {
        const bins = await binservice.getAllBins();
        console.log("bins ---> ", bins)
        this.setState({ bins });
      };
      
      handleSort = (sortColumn) => {
        this.setState({ sortColumn });
      };
    render() { 
        let { bins, sortColumn } = this.state;
        let sortedBins = _.orderBy(bins, [sortColumn.path], [sortColumn.order]);
        return (
          <>
            <h3>Event </h3>
            <p className="text-muted ">Manage bins</p>
    
            {/* <div className=" text-right mb-1">
              <EventModal ref="child" onSave={this.uploadEvent} />
            </div> */}
    
            {/* <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body p-5">
                    <BinTable
                     // editEvent={this.handleEdit}
                      bins={sortedBins}
                      sortColumn={this.state.sortColumn}
                      onSort={this.handleSort}
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </>
        );
    }
}
 
export default Bin;