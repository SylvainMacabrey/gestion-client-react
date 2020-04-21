import React from 'react';
import {MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from "mdbreact";

class Modal extends React.Component {

    state = {
        updateClient: {}
    }

    constructor(props) {
        super(props);
        this.state.updateClient = this.props.client;
    }

    formChange = (event) => {
        const value = event.currentTarget.value;
        this.setState({updateClient: value});
    }

    updateClient(event) {
        event.preventDefault();
        const value = event.currentTarget.value;
        console.log(value);
    }

    render() {
        const {openModal, onModified} = this.props;
        return (
            <MDBModal isOpen={openModal} toggle={onModified}>
                <form onSubmit={this.updateClient}>
                    <MDBModalHeader className="text-center" titleClass="w-100 font-weight-bold" toggle={onModified}>
                        Modifier les informations
                    </MDBModalHeader>
                    <MDBModalBody>
                        <div className="md-form mb-5">
                            <input type="text" id="editName" className="form-control validate" value={this.state.updateClient.name} onChange={this.formChange}/>
                        </div>
                    </MDBModalBody>
                    <MDBModalFooter className="justify-content-center">
                        <button className="btn btn-default">Enregistrer la modification</button>
                    </MDBModalFooter>
                </form>
            </MDBModal>
        );
    }

}

export default Modal;