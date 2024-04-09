import React from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import styled from 'styled-components';

const NewUser = ({estado, cambiarEstado}) => {

    return ( 

        <>
            { estado && 
                <Overlay>
                    <Contenedor>
                        <Encabezado>
                            <h3>Crear Usuario Nuevo</h3>
                        </Encabezado>
                        <Cerrar onClick={() => cambiarEstado(false)}>X</Cerrar>

                        <Form>
                            <Row md={8}>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="name">
                                            Primer Nombre
                                        </Label>
                                        <Input 
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="name">
                                            Segundo Nombre
                                        </Label>
                                        <Input 
                                        id="name"
                                        name="name"
                                        type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="lname">
                                            Primer Apellido
                                        </Label>
                                        <Input 
                                        id="lname"
                                        name="lname"
                                        type="text"
                                        required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="lname">
                                            Segundo Apellido
                                        </Label>
                                        <Input 
                                        id="lname"
                                        name="lname"
                                        type="text"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row md={8}>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="user">
                                            Usuario
                                        </Label>
                                        <Input 
                                        id="user"
                                        name="user"
                                        type="text"
                                        required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="pass">
                                            Contraseña
                                        </Label>
                                        <Input 
                                        id="pass"
                                        name="pass"
                                        type="text"
                                        required
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8}> 
                                <FormGroup>
                                    <Label for="dept">
                                    Departamento
                                    </Label>
                                    <Input
                                    id="dept"
                                    name="dept"
                                    placeholder="Departamento"
                                    type="select"
                                    required
                                    >
                                        <option disabled selected>
                                            
                                        </option>
                                        <option>
                                            Sistemas
                                        </option>
                                    </Input>
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="cargo">
                                    Cargo
                                    </Label>
                                    <Input
                                    id="cargo"
                                    name="cargo"
                                    type="text"
                                    required
                                    >
                                    </Input>
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button style={{
                                    background: "#2c0808",
                                    }}>
                                    Crear
                                    </Button>
                                </Col>
                                <Col>
                                    <Button onClick={() => cambiarEstado(false)}>
                                    Cancelar
                                    </Button>
                                </Col>
                                
                            </Row>
                            
                        </Form>
                    </Contenedor>
                </Overlay>

            }
        </>
    );
};

export default NewUser;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Contenedor = styled.div`
    width: 90%;
    height: 450px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    overflow-y: scroll;
`;

const Encabezado = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid;
    h3 {
        font-weight 500;
        font-size: 16px:
    }
`;
const Cerrar = styled.button`
    position: absolute;
    top:20px;
    right: 20px;
`;