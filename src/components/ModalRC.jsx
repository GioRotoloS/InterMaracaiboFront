import React from 'react';
import { Button, Col, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';
import styled from 'styled-components';

const ModalRC = () => {
  

    return ( 

        <>
            <Overlay>
                <Contenedor>
                    <Encabezado>
                        Requisicion de Compras
                    </Encabezado>
                    <Cerrar>
                        X
                    </Cerrar>
                    <Form>
                        <Row>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                Email
                                </Label>
                                <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                                />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">
                                Password
                                </Label>
                                <Input
                                id="examplePassword"
                                name="password"
                                placeholder="password placeholder"
                                type="password"
                                />
                            </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="exampleAddress">
                            Address
                            </Label>
                            <Input
                            id="exampleAddress"
                            name="address"
                            placeholder="1234 Main St"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress2">
                            Address 2
                            </Label>
                            <Input
                            id="exampleAddress2"
                            name="address2"
                            placeholder="Apartment, studio, or floor"
                            />
                        </FormGroup>
                        <Row>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCity">
                                City
                                </Label>
                                <Input
                                id="exampleCity"
                                name="city"
                                />
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="exampleState">
                                State
                                </Label>
                                <Input
                                id="exampleState"
                                name="state"
                                />
                            </FormGroup>
                            </Col>
                            <Col md={2}>
                            <FormGroup>
                                <Label for="exampleZip">
                                Zip
                                </Label>
                                <Input
                                id="exampleZip"
                                name="zip"
                                />
                            </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup check>
                            <Input
                            id="exampleCheck"
                            name="check"
                            type="checkbox"
                            />
                            <Label
                            check
                            for="exampleCheck"
                            >
                            Check me out
                            </Label>
                        </FormGroup>
                        <Button>
                            Sign in
                        </Button>
                    </Form>
                </Contenedor>
            </Overlay>
        </>
    );
};

export default ModalRC;

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
    width: 75%;
    min-height: 50%;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
`;

const Encabezado