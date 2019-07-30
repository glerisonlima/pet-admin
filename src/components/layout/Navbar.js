import React from 'react';
import { Link } from 'react-router-dom'

// import { Container } from './styles';

export default function Navbar() {
  return (
    <div className="barra">
        <Link to="/">Home</Link>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
    </div>
  );
}
