import React from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import Navbar from '../../components/Navbar';

const Compras = () => {
  return (
    <div className='compras'>
        <>
        <Navbar/>
        </>
        
        <div className='container fluid justify-content-center text-center' style={{
            marginTop: 10
        }}>
            <Row md={4}  style={{
                marginTop: 30,
            }}>
                <Col>
                    <Card
                        body>
                        <CardTitle tag="h5">
                        Ordenes de Compra
                        </CardTitle>
                        <Button href="/orderc"
                            style={{
                            background: "#2c0808",
                        }}>
                        Comprobar
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Compras