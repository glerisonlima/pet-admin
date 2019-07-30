import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Col, Card, Form, Button, Row, FormGroup, Label, Input  } from 'reactstrap'

export default class Add extends Component {
  render() {
    return (
        <Col sm="12">
            <Card className="cardLista">
                <Form>
                    <Row form>
                        <Col md={2}>
                            <FormGroup>
                            <Label for="id">Codigo*</Label>
                            <Input type="text" name="id" id="id" placeholder="automatico" />
                            </FormGroup>
                        </Col>
                        <Col md={8}>
                            <FormGroup>
                            <Label for="nome">Nome</Label>
                            <Input type="text" name="nome" id="nome" placeholder="informe o nome para cadastro" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                            <Label for="dtNasc">Data de Nascimento</Label>
                            <Input type="date" name="dtNasc" id="dtNasc" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="id">Proprietário</Label>
                            <Input type="text" name="id" id="id" placeholder="automatico" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                            <Label for="nome">Especie</Label>
                            <Input type="text" name="nome" id="nome" placeholder="informe o nome para cadastro" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                            <Label for="dtNasc">Raça</Label>
                            <Input type="text" name="dtNasc" id="dtNasc" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                            <Label for="dtNasc">Pelagem</Label>
                            <Input type="text" name="dtNasc" id="dtNasc" />
                            </FormGroup>
                        </Col>
                    </Row>
                    
                    <Button outline color="primary" onClick={this.salvarCliente}>Salvar</Button>
                    <Link to="/animais"><Button type="button" className="btnCanc" outline color="secondary">Cancelar</Button></Link>
                </Form>
            </Card>
        </Col>
    );
  }
}
