import React, { Component } from 'react';
import {Card, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './cliente.css'

export default class Add extends Component {

state={
    id: "",
    nome:"",
    dtNasc: "",
    dtCadastro: "",
    cep: "", 
    endereco: "",
    num: "",
    comp: "",
    bairro: "",
    cidade: "",
    estado: "",
    email: "",
    telefone: ""
}
  render() {
    const estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']
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
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input type="email" name="email" id="email" placeholder="melhor E-mail"/>
                    </FormGroup>
                    <Row form>
                        <Col md={2}>
                            <FormGroup>
                            <Label for="cep">Cep</Label>
                            <Input type="text" name="cep" id="cep"/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="endereco">Endereço</Label>
                            <Input type="text" name="endereco" id="endereco" placeholder="nome da rua (logradouro)"/>
                            </FormGroup>
                        </Col>
                        <Col md={1}>
                            <FormGroup>
                            <Label for="num">Numero</Label>
                            <Input type="text" name="num" id="num"/>
                            </FormGroup>  
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                            <Label for="bairro">Bairro</Label>
                            <Input type="text" name="bairro" id="bairro"/>
                            </FormGroup>  
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={3}>
                        <FormGroup>
                            <Label for="estado">Estado</Label>
                            <Input type="select" name="estado" id="estado">
    {estados.map((sigla) =><option key={sigla}>{sigla}</option>)}          
                            </Input>
                            </FormGroup>
                        </Col>    
                        <Col md={3}>
                            <FormGroup>
                            <Label for="telefone">Telefone</Label>
                            <Input type="text" name="telefone" id="telefone"/>
                            </FormGroup>
                        </Col>                        
                    </Row>
                    
                    <Button outline color="primary">Salvar</Button>
                    <Button className="btnCanc" outline color="secondary">Cancelar</Button>
                </Form>
            </Card>
        </Col>
    );
  }
}
