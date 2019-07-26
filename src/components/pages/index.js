import React, { Component } from 'react';
import {Card, Col, Jumbotron, Container } from 'reactstrap';

// import { Container } from './styles';

export default class index extends Component {
  render() {
    return (
      <div>
        <Col sm="12">
          <Card className="cardLista">
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">PetAdmin</h1>
                <p className="lead">Sistema de controle de pet shop</p>
              </Container>
            </Jumbotron>
          </Card>
        </Col>
      </div>
    );
  }
}
