import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import styled from 'styled-components';

const ModalRC = ({estado, cambiarEstado}) => {
  
    const [inputs, setInputs] = useState([{ amount: "", unit: "", desc: "" }]);
  
    const handleChange = (event, index) => {
      let { name, value } = event.target;
      let onChangeValue = [...inputs];
      onChangeValue[index][name] = value;
      setInputs(onChangeValue);
    };

    return ( 

        <>
            { estado && 
                <Overlay>
                    <Contenedor>
                        <Encabezado>
                            <h3>Detalle de Compra número 1</h3>
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
                                    value="Sistemas"
                                    type="text"
                                    disabled
                                    >
                                    </Input>
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="date">
                                    Fecha
                                    </Label>
                                    <Input
                                    id="date"
                                    name="date"
                                    value="2024-03-12"
                                    type="date"
                                    required
                                    disabled
                                    />
                                </FormGroup>
                                </Col>
                            </Row>
                            {inputs.map((item, index) => (
                                <Row>
                                    <Col md={2} key={index}>
                                        <Label for="amount">
                                            Cantidad
                                        </Label>
                                        <Input 
                                        id="amount"
                                        name="amount"
                                        type="number"
                                        min={1}
                                        required
                                        value={item.amount}
                                        onChange={(event) => handleChange(event, index)}
                                        disabled
                                        />
                                    </Col>
                                    <Col md={1}>
                                        <Label for="unit">
                                            Unidad
                                        </Label>
                                        <Input 
                                        id="unit"
                                        name="unit"
                                        type="text"
                                        required
                                        value={item.unit}
                                        onChange={(event) => handleChange(event, index)}
                                        disabled
                                        />
                                    </Col>
                                    <Col md={7}>
                                        <Label for="desc">
                                            descripcion
                                        </Label>
                                        <Input 
                                        id="desc"
                                        name="descripcion"
                                        type="text"
                                        required
                                        value={item.desc}
                                        onChange={(event) => handleChange(event, index)}
                                        disabled
                                        />
                                    </Col>
                                </Row>
                            ))}
                            <Row>
                                <FormGroup>
                                    <Label for="obs">
                                    Observaciones
                                    </Label>
                                    <Input
                                    id="obs"
                                    name="obs"
                                    type="textarea"
                                    style={{
                                        resize: 'none'
                                    }}
                                    value="Obervaciones de la compra"
                                    disabled
                                    />
                                </FormGroup>
                            </Row>
                            <Row>
                                <Col>
                                    <Button style={{
                                    background: "#2c0808",
                                    }}>
                                    Procesar
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