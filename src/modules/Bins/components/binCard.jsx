import React from 'react';
import { useHistory } from "react-router-dom";

const BinCard = ({bin}) => {
    const history = useHistory();
    const BinFull = () =>{
        let classStatus  = bin.isFull ===1 ? "badge bg-danger text-white ml-4" : "badge bg-info text-white ml-4"
        let status = bin.isFull ===1 ? "full" : "empty"
        return(<span className={classStatus}>{status}</span>)
    }
    const BinStatus = () => {
        let classStatus  = bin.status ===1 ? "text-primary" : "text-danger"
        let status = bin.status ===1 ? "Active" : "Inactive"
        return(<span className={classStatus}>{status}</span>)
    }
    const viewBin = () => {
        history.push({pathname: `/app/binDetail`, state:bin})
    }
    return ( 
        <>
            <div className="card col-md-3 m-3">
                <div className="card-body">
                    <div className="row">
                        
                    </div>
                    <span><BinStatus /></span>
                    <p className="text-muted ">Channel #243  - <BinFull /></p>
                    <span className="font-weight-bold">{bin.contactName}</span><br />
                    <span className="text-muted">{bin.contactAddress}</span>
                    <hr />
                    <button className="btn btn-primary btn-block" onClick={viewBin}>View details</button>
                   
                </div>
            </div>
        </>
     );
}
 
export default BinCard;