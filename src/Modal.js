import React from 'react';
import {MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from "mdbreact";

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: null,
        }
        this.updateClient = this.updateClient.bind(this);
    }

    componentWillReceiveProps (props) {
        this.setState({ id: props.client.id })
        this.setState({ name: props.client.name })
    }

    formChange = (event) => {
        const value = event.currentTarget.value;
        this.setState({name: value});
    }

    updateClient(event) {
        event.preventDefault();
        const value = event.currentTarget.value;
        this.setState({name: value});
        this.props.updateClient({id: this.state.id, name: this.state.name});
        this.props.onModified({id: this.state.id, name: this.state.name});
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
                            <input type="text" id="editName" className="form-control validate" value={this.state.name} onChange={this.formChange}/>
                        </div>
                    </MDBModalBody>
                    <MDBModalFooter className="justify-content-center">
                        <button className="btn btn-default" data-dismiss="modal">Enregistrer la modification</button>
                    </MDBModalFooter>
                </form>
            </MDBModal>
        );
    }

}

export default Modal;