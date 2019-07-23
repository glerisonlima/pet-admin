import React, { Component } from 'react';
import { Card, Col, FormGroup, Label, Input } from 'reactstrap'


export default class Clientes extends Component {
  render() {
    return (
        <div>
            <Col sm="12">
                <Card>
                <Col sm="6">
                    <FormGroup>
                        <Input type="text" name="pesquisa" id="pesquisa" placeholder="Quem você procura ?" />
                    </FormGroup>
                </Col>
                </Card>
            </Col>
        </div>
    );
  }
}
