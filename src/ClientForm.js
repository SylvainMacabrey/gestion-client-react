import React from 'react';

class ClientForm extends React.Component {

    state = {
        newClient: ""
    }

    formChange = (event) => {
        const value = event.currentTarget.value;
        this.setState({newClient: value});
    }

    createClient = (event) => {
        event.preventDefault();
        const client = {id: new Date().getTime(), name: this.state.newClient};
        this.props.onClientAdd(client);
        this.setState({newClient: ""});
      }

    render() {
        return <form className="text-center border border-light p-5" onSubmit={this.createClient}>
            <p className="h4 mb-4">Nouveau client</p>
            <input type="text" id="createName" className="form-control mb-4" placeholder="Nom complet du client" value={this.state.newClient} onChange={this.formChange}/>
            <button className="btn btn-info btn-block my-4" type="submit">Ajouter</button>
        </form>
    }

}

export default ClientForm;