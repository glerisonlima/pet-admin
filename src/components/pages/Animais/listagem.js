import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Card, Col, FormGroup, Badge, Button, Label, Input, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import './animais.css'


export default class Clientes extends Component {
  render() {
    return (
        <div>            
            <Col sm="12">
                <Card className="cardLista">
                <h2>Lista de Animais</h2>   
                <div className="pesqCliente">    
                    <Col sm="6">
                        <FormGroup>
                            <Input type="text" name="pesquisa" id="pesquisa" placeholder="Quem você procura ?" />
                        </FormGroup>
                    </Col>
                    <Link to="/animaisAdd"><Button className="btnNovo" color="info">+ Novo</Button></Link>
                </div>
                    <Table hover responsive size="sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>E-mail</th>
                            <th>Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <Badge className="btnAcoes" color="secondary">Alterar</Badge>
                                <Badge className="btnAcoes" color="danger">Remover</Badge>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                                <Badge className="btnAcoes" color="secondary">Alterar</Badge>
                                <Badge className="btnAcoes" color="danger">Remover</Badge>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>
                                <Badge className="btnAcoes" color="secondary">Alterar</Badge>
                                <Badge className="btnAcoes" color="danger">Remover</Badge>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                    <Pagination size="sm" aria-label="Page navigation example">
                        <PaginationItem>
                            <PaginationLink first href="#" />
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink previous href="#" />
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#">
                                1
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#">
                                2
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#">
                                3
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink next href="#" />
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink last href="#" />
                            </PaginationItem>
                        </Pagination>
                </Card>
            </Col>
        </div>
    );
  }
}
