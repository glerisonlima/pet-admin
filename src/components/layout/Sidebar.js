import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faAddressCard, faCubes, faTruck } from '@fortawesome/free-solid-svg-icons'

// import { Container } from './styles';

export default function Sidebar() {
  return (
    <aside className="sidebar">
        <Link to="/clientes"><button ><FontAwesomeIcon className="icone" icon={faAddressCard} />Clientes</button></Link>
        <button><FontAwesomeIcon className="icone" icon={faPaw} />Animais</button>
        <button><FontAwesomeIcon className="icone" icon={faCubes} />Produtos</button>
        <button><FontAwesomeIcon className="icone" icon={faTruck} />Fornecedor</button>
    </aside>
  );
}
