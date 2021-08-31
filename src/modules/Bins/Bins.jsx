import React, { Component } from 'react';
import _ from "lodash";
import binservice from "../../services/binService";
import BinCard from './components/binCard';
import BinModal from './components/binModal';
import { toast } from "react-toastify";


class Bin extends Component {
    state = {
        sortColumn: { path: "id", order: "asc" },
        bins: [],
        fakeBins : [

            {id: 5, contactName: "Kwame Asante", contactAddress:"Mamprobi, Ebenezer Crescent",status: 1, isFull: 0},
            {id: 6, contactName: "Dennis Makenzi", contactAddress:"Tesano, Police Depot",status: 1, isFull: 0},
            {id: 7, contactName: "John Smith", contactAddress:"Tema, Community 22",status: 1, isFull: 0},
            {id: 8, contactName: "Michael Doe", contactAddress:"Malam, Kwashiman Market",status: 1, isFull: 0},
        ]
      };
      componentDidMount() {
        this.fetchBins();
      }
    
      fetchBins = async () => {
        const bins = await binservice.getAllBins();
        this.setState({ bins });
      };

      uploadBin = async (binData) => {
        try {
          let { status, contactName,contactAddress,contactPhone, longitude, latitude } = binData;
          let data = { status, contactName,contactAddress,contactPhone, longitude, latitude  };
            if (binData.id) {
            await binservice.updatebin(data);
          } else {
            
            let binResponse = await binservice.saveBin(data);
          }
          toast.success("bin saved successfully");
          this.fetchbins();
        } catch (ex) {
          console.log(ex);
          if (ex.response && ex.response.status === 400) {
            let { message } = ex.response.data;
    
            toast.error(message);
          }
        }
      };
      
      handleSort = (sortColumn) => {
        this.setState({ sortColumn });
      };
    render() { 
        let { bins, sortColumn } = this.state;
        let sortedBins = _.orderBy(bins, [sortColumn.path], [sortColumn.order]);
        return (
          <>
            <h3>Bin </h3>
            <p className="text-muted ">Manage bins</p>

                <div className="row">

                {this.state.bins.map((bin) => (
                    <BinCard key={bin.id} bin={bin} />
                ))}
                 {this.state.fakeBins.map((bin) => (
                    <BinCard key={bin.id} bin={bin} />
                ))}
                </div>

               <BinModal  ref="child" onSave={this.uploadBin} />
        
          </>
        );
    }
}
 
export default Bin;