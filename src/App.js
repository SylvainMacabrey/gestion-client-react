import React from 'react';
import './App.css';
import Client from "./Client";
import ClientForm from "./ClientForm";
import Modal from "./Modal";

class App extends React.Component {

  state = {
    clients: [
      {id: 1, name: "Sylvain Macabrey"},
      {id: 2, name: "Emmanuel Macron"},
      {id: 3, name: "Edouard Phillip"},
    ],
    openModal: false,
    clientAtModified: {
      id: null,
      name: null
    }
  }

  deleteClient = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);
    this.setState({clients});
  }

  addClient = (client) => {
    const clients = this.state.clients.slice();
    clients.push(client);
    this.setState({clients});
  }

  toggleModal = (client) => {
    this.setState({clientAtModified: client, openModal: !this.state.openModal});
  }

  updateClient = (client) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex((c) => c.id === client.id);
    clients[index].name = client.name;
    this.setState({clients});
  }

  render() {
    return (
      <div className="App">
        <div className="container liste-clients">
          <h1>Liste de clients</h1>
          <ul className="list-group">
          {
            this.state.clients.map(client => (<Client client={client} onModified={this.toggleModal} onDelete={this.deleteClient} key={client.id}/>))
          }
          </ul>
        </div>
        <div className="container new-client">
          <ClientForm onClientAdd={this.addClient}/>
        </div>
        <Modal updateClient={this.updateClient} client={this.state.clientAtModified} openModal={this.state.openModal} onModified={this.toggleModal}/>
      </div>
    );
  }

}

export default App;
