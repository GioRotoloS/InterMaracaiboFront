import React from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import Navbar from '../../components/admin/Navbar';

const Recibidor = () => {
  return (
    <div className='recibidor'>
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
                        Estado de Requisicion
                        </CardTitle>
                        <Button color="primary">
                        Comprobar
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
  );
}

export default Recibidor