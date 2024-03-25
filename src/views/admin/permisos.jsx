import React, { useState } from 'react'
import Navbar from '../../components/admin/Navbar';
import { Button, Card, CardText, CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'

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
        <div className='container fluid justify-content-center text-center title' style={{
            
            marginTop: 10,
            marginBottom: 10
        }}>
          <h1>Permisos</h1>
          <div>
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
                className={(activeTab==="2" ? "active" : "")}
                  onClick={() => cambiarTab("2")}
                >
                  Compras
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <h4>
                      Tab 1 Contents
                    </h4>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>
                        Special Title Treatment
                      </CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to additional content.
                      </CardText>
                      <Button>
                        Go somewhere
                      </Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>
                        Special Title Treatment
                      </CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to additional content.
                      </CardText>
                      <Button>
                        Go somewhere
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
          <Button style={{
              background: "#2c0808",
              marginTop: "32px"
              }} href="/admin">
                  Volver
          </Button>
        </div>
    </div>
  )
}

export default Permisos