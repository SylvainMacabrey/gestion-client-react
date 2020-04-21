import React from 'react';

class Client extends React.Component {

    render() {
        const {onDelete, onModified, client} = this.props;
        return <li className="list-group-item list-client">
            <p className="list-p-name">{client.name}</p>
            <button type="button" className="btn btn-danger btn-client" onClick={() => onDelete(client.id)}>Supprimer</button>
            <button type="button" className="btn btn-warning btn-client" onClick={() => onModified(client)}>Modifier</button>
        </li>
    }

}

export default Client;