import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import styled from 'styled-components';

const NewCargo = ({estado, cambiarEstado}) => {

    const [activeTab, setActiveTab] = useState("1");

    const cambiarTab = (numeroTab) => {
        if(activeTab !== numeroTab){
        setActiveTab(numeroTab);
        }
    }

    return ( 

        <>
            { estado && 
                <Overlay>
                    <Contenedor>
                        <Encabezado>
                            <h3>Crear Cargo Nuevo</h3>
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
                                    type="text"
                                    required
                                    >
                                    </Input>
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                            <div className='tabs container p-3 mb-5 bg-body border border-dark rounded'>
                                <Nav tabs>
                                <NavItem>
                                    <NavLink
                                    className={(activeTab==="1" ? "active" : "")}

                                    onClick={() => cambiarTab("1")}
                                    >
                                    Almacen
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                    className={(activeTab==="2" ? "active" : "")}
                                    onClick={() => cambiarTab("2")}
                                    >
                                    Compras
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                    className={(activeTab==="3" ? "active" : "")}
                                    onClick={() => cambiarTab("3")}
                                    >
                                    Recibidor
                                    </NavLink>
                                </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab} >
                                <TabPane tabId="1">
                                    <Form style={{
                                    marginTop: "20px",
                                    
                                    }}>
                                    <Row>
                                        <Col md={4}>
                                        <FormGroup
                                            check>
                                            <Input 
                                            id="Requisiciones_Compra"
                                            name="requisiciones_compra"
                                            type="checkbox"
                                            value="1"
                                            style={{
                                                borderColor: "#2c0808"
                                            }}
                                            />
                                            <Label>
                                                Requisiciones de Compra
                                            </Label>
                                        </FormGroup>
                                        <FormGroup
                                            check>
                                            <Input 
                                            id="Recepcion_Mercancia"
                                            name="recepcion_mercancia"
                                            type="checkbox"
                                            value="1"
                                            style={{
                                                borderColor: "#2c0808"
                                            }}
                                            />
                                            <Label>
                                                Recepcion de Mercancia
                                            </Label>
                                        </FormGroup>
                                        <FormGroup
                                            check>
                                            <Input 
                                            id="Despacho_Mercancia"
                                            name="despacho_mercancia"
                                            type="checkbox"
                                            value="1"
                                            style={{
                                                borderColor: "#2c0808"
                                            }}
                                            />
                                            <Label>
                                                Despacho de Mercancia
                                            </Label>
                                        </FormGroup>
                                        <FormGroup
                                            check>
                                            <Input 
                                            id="Almacen_Existencia"
                                            name="almacen_existencia"
                                            type="checkbox"
                                            value="1"
                                            style={{
                                                borderColor: "#2c0808"
                                            }}
                                            />
                                            <Label>
                                                Almacen en Existencia
                                            </Label>
                                        </FormGroup>
                                        <FormGroup
                                            check>
                                            <Input 
                                            id="Articulo_Nuevo"
                                            name="articulo_nuevo"
                                            type="checkbox"
                                            value="1"
                                            style={{
                                                borderColor: "#2c0808"
                                            }}
                                            />
                                            <Label>
                                                Creacion de Articulo Nuevo
                                            </Label>
                                            </FormGroup>
                                        </Col>
                                        </Row>
                                    </Form>
                                </TabPane>
                                <TabPane tabId="3">
                                <Form style={{
                                    marginTop: "20px"
                                    }}>
                                    <Row>
                                        <Col md={4}>
                                        <FormGroup
                                            check>
                                            <Input 
                                            id="Requisiciones_Compra"
                                            name="requisiciones_compra"
                                            type="checkbox"
                                            value="1"
                                            style={{
                                                borderColor: "#2c0808"
                                            }}
                                            />
                                            <Label>
                                                Requisiciones de Compra
                                            </Label>
                                        </FormGroup>
                                        <FormGroup
                                            check>
                                            <Input 
                                            id="Nuevo_Proveedor"
                                            name="nuevo_proveedor"
                                            type="checkbox"
                                            value="1"
                                            style={{
                                                borderColor: "#2c0808"
                                            }}
                                            />
                                            <Label>
                                                Carga de Facturas
                                            </Label>
                                        </FormGroup>
                                        </Col>
                                        </Row>
                                    </Form>
                                </TabPane>
                                <TabPane tabId="2">
                                <Form style={{
                                    marginTop: "20px"
                                    }}>
                                    <Row>
                                        <Col md={4}>
                                        <FormGroup
                                            check>
                                            <Input 
                                            id="Requisiciones_Compra"
                                            name="requisiciones_compra"
                                            type="checkbox"
                                            value="1"
                                            style={{
                                                borderColor: "#2c0808"
                                            }}
                                            />
                                            <Label>
                                                Requisiciones de Compra
                                            </Label>
                                        </FormGroup>
                                        <FormGroup
                                            check>
                                            <Input 
                                            id="Nuevo_Proveedor"
                                            name="nuevo_proveedor"
                                            type="checkbox"
                                            value="1"
                                            style={{
                                                borderColor: "#2c0808"
                                            }}
                                            />
                                            <Label>
                                                Agregar Nuevo Proveedor
                                            </Label>
                                        </FormGroup>
                                        </Col>
                                        </Row>
                                    </Form>
                                </TabPane>
                                </TabContent>
                            </div>
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

export default NewCargo;

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