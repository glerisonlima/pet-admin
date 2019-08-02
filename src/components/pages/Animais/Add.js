import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Col, Card, Form, Button, Row, FormGroup, Label, Input, InputGroup, InputGroupAddon, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap'

export default class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modalEspecie: false,
          modalRaca: false,
          modalPelagem: false
        };
    
        this.clickEspecie = this.clickEspecie.bind(this);
      }

    clickEspecie() {
        this.setState(prevState => ({
            modalEspecie: !prevState.modalEspecie
          }));
    } 
    clickRaca = (event) => {
        alert('btn Raça clicado!')
    } 
    clickPelagem = (event) => {
        alert('btn Pelagem clicado!')
    } 

  render() {
    return (
        <>
        <Col sm="12">
            <Card className="cardLista">
                <Form>
                    <Row form>
                        <Col md={2}>
                            <FormGroup>
                            <Label for="id">Codigo*</Label>
                            <Input type="text" disabled name="id" id="id" placeholder="automatico" />
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
                        <Col md={5}>
                            <FormGroup>
                            <Label for="proprietario">Proprietário</Label>
                            <Input type="text" name="proprietario" id="proprietario" placeholder="Dono do animalzinho" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                            <Label for="especie">Especie</Label>
                            <InputGroup>
                                <Input type="select" name="especie" id="especie" placeholder="pesquise a especie" />
                                <InputGroupAddon addonType="append"><Button onClick={this.clickEspecie} type='button' color="info">+</Button></InputGroupAddon>
                            </InputGroup>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                            <Label for="raca">Raça</Label>
                            <InputGroup>
                                <Input type="select" name="raca" id="raca" placeholder="pesquise a raça" />
                                <InputGroupAddon addonType="append"><Button onClick={this.clickRaca} type='button' color="info">+</Button></InputGroupAddon>
                            </InputGroup>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="pelagem">Pelagem</Label>
                            <InputGroup>
                                <Input type="select" name="pelagem" id="pelagem" placeholder="pesquise a pelagem" />
                                <InputGroupAddon addonType="append"><Button onClick={this.clickPelagem} type='button' color="info">+</Button></InputGroupAddon>
                            </InputGroup>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={2}>
                            <FormGroup>
                            <Label for="id">Peso</Label>
                            <Input type="text" name="id" id="id" placeholder="informe o peso do animal" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                            <Label for="nome">Sexo</Label>
                            <Input type="select" name="nome" id="nome">
                                <option>Macho</option>
                                <option>Femea</option>
                            </Input>
                            </FormGroup>
                        </Col>
                        <Col md={8}>
                            <FormGroup>
                            <Label for="dtNasc">Observação</Label>
                            <Input type="textarea" name="dtNasc" id="dtNasc" />
                            </FormGroup>
                        </Col>                        
                    </Row>
                    
                    <Button outline color="primary" onClick={this.salvarCliente}>Salvar</Button>
                    <Link to="/animais"><Button type="button" className="btnCanc" outline color="secondary">Cancelar</Button></Link>
                </Form>
            </Card>
        </Col>

        {/********** Modais  **************/}

        <Modal isOpen={this.state.modalEspecie} toggle={this.clickEspecie} className={this.props.className}>
          <ModalHeader toggle={this.clickEspecie}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.clickEspecie}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.clickEspecie}>Cancel</Button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.clickEspecie}>Cancel</Button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.clickEspecie}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </>
    );
  }
}
