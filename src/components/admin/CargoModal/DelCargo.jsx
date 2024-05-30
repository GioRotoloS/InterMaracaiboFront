import React from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import styled from 'styled-components';

const DelCargo = ({estado, cambiarEstado}) => {

    return ( 

        <>
            { estado && 
                <Overlay>
                    <Contenedor>
                        <Encabezado>
                            <h3>Eliminar Cargo</h3>
                        </Encabezado>
                        <Cerrar onClick={() => cambiarEstado(false)}>X</Cerrar>
                        <Form>
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
                                    placeholder="Cargo"
                                    type="select"
                                    required
                                    >
                                        <option disabled selected>
                                            
                                        </option>
                                        <option>
                                            Admin
                                        </option>
                                    </Input>
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button style={{
                                    background: "#2c0808",
                                    }}>
                                    Eliminar
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

export default DelCargo;

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
    height: 250px;
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