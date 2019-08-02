import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import {Card, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './cliente.css'

/************ API PARA CONSULTA DE CEP ***********************/
const apiCep = "https://webmaniabr.com/api/1/cep/"
const app_key = "M32cx3uqBa27prh5vcY3Svv5etC8cGZR"
const app_secret = "U8Ea0RwqJRr1brWl0ydJQmJzl0UWuk4FTvBxtP9vLaJYzTLa"

/* https://webmaniabr.com/api/1/cep/60764-185/?app_key=M32cx3uqBa27prh5vcY3Svv5etC8cGZR&app_secret=U8Ea0RwqJRr1brWl0ydJQmJzl0UWuk4FTvBxtP9vLaJYzTLa */

const stateInicial={
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



export default class Add extends Component {

constructor(props){
    super(props)

    this.buscaCep = this.buscaCep.bind(this);
}

state = stateInicial;


handlerCep = (event) => {
    this.setState({cep: event.target.value})
}

buscaCep = () => {
        axios.get(`${apiCep}${this.state.cep}/?app_key=${app_key}&app_secret=${app_secret}`)
            .then(res => {
                if(!res.data.error){
                    this.setState({
                        endereco: res.data.endereco,
                        bairro: res.data.bairro,
                        cidade: res.data.cidade,
                        estado: res.data.uf })
                }else{
                    alert(res.data.error)
                }
            })
}
salvarCliente() {alert("Great Shot!");}

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
                            <Input type="text" onBlur={this.buscaCep} onChange={this.handlerCep} value={this.state.cep} id="cep"/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="endereco">Endereço</Label>
                            <Input type="text" value={this.state.endereco} id="endereco" placeholder="nome da rua (logradouro)"/>
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
                            <Input type="text" value={this.state.bairro} id="bairro"/>
                            </FormGroup>  
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={3}>
                            <FormGroup>
                            <Label for="cidade">Cidade</Label>
                            <Input type="text" value={this.state.cidade} id="telefone"/>
                            </FormGroup>
                        </Col> 
                        <Col md={3}>
                        <FormGroup>
                            <Label for="estado">Estado</Label>
                            <Input type="select" value={this.state.estado} id="estado">
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
                    
                    <Button outline color="primary" onClick={this.salvarCliente}>Salvar</Button>
                    <Link to="/clientes"><Button type="button" className="btnCanc" outline color="secondary">Cancelar</Button></Link>
                </Form>
            </Card>
        </Col>
    );
  }
}
