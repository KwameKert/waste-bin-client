import React from "react";
import Form from "../../../components/common/form";
import { Modal, Button } from "react-bootstrap";
import Joi from "joi-browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class BinModal extends Form {
  state = {
    data: {
      id: "",
      contactName: "",
      contactAddress: "",
      contactPhone: "",
      latitude: "",
      longitude: "",
      status: "",
    },
    
    errors: {},
    options: [
      { id: "active", name: "Active" },
      { id: "inactive", name: "Inactive" },
    ],
    isLoading: false,
    show: false,
  };

  schema = {
    id: Joi.number().allow(null),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
    latitude: Joi.number(),
    longitude: Joi.number(),
    contactAddress: Joi.string().required().label("Contact Address"),
    contactName: Joi.string().required().label("Contact Name"),
    contactPhone: Joi.string().required().label("Contact Phone"),
    status: Joi.string().required().label("Status"),
  };

  doSubmit = async () => {
    this.props.onSave(this.state.data);
    this.handleClose();
  };

  handleClose = () => this.setState({ show: false });
  handleShow = (data) => {
    if (data) {
      this.setState(
        {
          data,
        },
        () => this.validate()
      );
    }
    this.setState({ show: true });
  };
  render() {
    let { show } = this.state;
    return (
      <>
       <button  onClick={this.handleShow} className="btn kc_fab_main_btn"><FontAwesomeIcon  icon={faPlus} /> </button>
        {/* <Button variant="primary" onClick={this.handleShow}>
          <FontAwesomeIcon icon={faPlus} /> Add Event
        </Button> */}

        <Modal size="lg" show={show} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Manage Bin</Modal.Title>
          </Modal.Header>
          <form onSubmit={this.handleSubmit}>
            <Modal.Body>
              {this.renderInput("contactName", "Contact Name")}
              {this.renderInput("contactAddress", "Contact Address")}
              {this.renderInput("contactPhone", "Contact Phone")}
              <div className="row">
                  <div className="col">
                  {this.renderInput("latitude", "Latitude ")}
                  </div>
                  <div className="col">
                  {this.renderInput("longitude", "Longitude ")}
                  </div>
              </div>
              {this.renderSelect("status", "Status", this.state.options)}
            
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              {this.renderSubmitButton("Save", this.state.isLoading,"")}
              {/* <Button variant="primary" onClick={this.handleClose}>
                Save
              </Button> */}
            </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }
}

export default BinModal;
