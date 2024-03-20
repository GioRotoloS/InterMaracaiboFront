import React from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import Navbar from '../../components/admin/Navbar';

const Compras = () => {
  return (
    <div className='compras'>
        <>
        <Navbar/>
        </>
        
        <div className='container fluid justify-content-center text-center title' style={{
            marginTop: 10
        }}>
        <h1>Compras</h1>
            <Row md={4}  style={{
                marginTop: 30,
            }}>
                <Col>
                    <Card
                        body>
                        <CardTitle tag="h5">
                        Requisiciones de Compra
                        </CardTitle>
                        <Button href="/purch/orderc"
                            style={{
                            background: "#2c0808",
                        }}>
                        Revisar
                        </Button>
                    </Card>
                </Col>
                <Col>
                    <Card
                        body>
                        <CardTitle tag="h5">
                        Agregar nuevo Proveedor
                        </CardTitle>
                        <Button href="/purch/orderc"
                            style={{
                            background: "#2c0808",
                        }}>
                        Agregar
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Compras