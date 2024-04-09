import React, { useState } from 'react'
import Navbar from '../../components/admin/Navbar';
import { Button, Card, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'

const Permisos = () => {

  const [activeTab, setActiveTab] = useState("1");

  const cambiarTab = (numeroTab) => {
    if(activeTab !== numeroTab){
      setActiveTab(numeroTab);
    }
  }

  return (
    <div className='permisos' style={{
      width: "100%"
  }}>
      <>
        <Navbar/>
        </>
        <div className='container fluid' style={{
            
            marginTop: 10,
            marginBottom: 10
        }}>
          <div className='justify-content-center text-center title'>
            <h1>Permisos</h1>
          </div>
          <div className='container fluid justify-content-center mt-5 mb-5 text-center'>
            <Row>
                <Col md={5}>
                    <Label for="dept">
                        Modulo
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
                            Almacen
                        </option>
                        <option>
                            Compras
                        </option>
                        <option>
                            Recibidor
                        </option>
                    </Input>
                </Col>
                <Col md={2}>
                    <Label for="position">
                        Cargo
                    </Label>
                    <Input
                    id="position"
                    name="position"
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
                </Col>
                <Col md={3}>
                    <Label for="Orden">
                        Orden
                    </Label>
                    <Input
                    id="Orden"
                    name="Orden"
                    placeholder="Fecha"
                    type="select"
                    required
                    >
                        <option selected>
                            Ascendente
                        </option>
                        <option>
                            Descendente
                         </option>
                    </Input>
                </Col>
                <Col>
                    <Button style={{
                    background: "#2c0808",
                    marginTop: "32px"
                    }}>Buscar
                    </Button>
                </Col>
            </Row>
          </div>
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
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
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
                          />
                          <Label>
                            Creacion de Articulo Nuevo
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button style={{
                        background: "#2c0808",
                        }}>
                        Actualizar
                        </Button>
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
                          />
                          <Label>
                            Carga de Facturas
                          </Label>
                      </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button style={{
                        background: "#2c0808",
                        }}>
                        Actualizar
                        </Button>
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
                          />
                          <Label>
                            Agregar Nuevo Proveedor
                          </Label>
                      </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button style={{
                        background: "#2c0808",
                        }}>
                        Actualizar
                        </Button>
                      </Col>
                  </Row>
                </Form>
              </TabPane>
            </TabContent>
          </div>
          <div className='justify-content-center text-center'>
            <Button style={{
              background: "#2c0808",
              marginTop: "32px",
              }} href="/admin">
                  Volver
            </Button>
          </div>
          
        </div>
    </div>
  )
}

export default Permisos