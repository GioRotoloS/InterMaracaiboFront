import React, { useState } from 'react'
import { Button, Card, CardTitle, Col, Row, Table } from 'reactstrap'
import Navbar from '../../components/admin/Navbar';

const Cargos = () => {
  return (
    <div className='users'>
    <>
    <Navbar/>
    </>
    
    <div className='container fluid justify-content-center text-center title' style={{
        marginTop: 10
    }}>
    <h1>Cargos</h1>
        <Row md={4}  style={{
            marginTop: 30,
        }}>
            <Col>
                <Card
                    body
                    className="">
                    <CardTitle tag="h5">
                    Crear Cargo
                    </CardTitle>
                    <Button  style={{
                        background: "#2c0808",
                    }}>
                    Crear
                    </Button>
                </Card>
            </Col>
            <Col>
                <Card
                    body>
                    <CardTitle tag="h5">
                    Eliminar Cargo
                    </CardTitle>
                    <Button  style={{
                        background: "#2c0808",
                    }}>
                    Eliminar
                    </Button>
                </Card>
            </Col>
            <Col>
                <Card
                    body>
                    <CardTitle tag="h5">
                    Editar Cargo
                    </CardTitle>
                    <Button style={{
                        background: "#2c0808",
                    }}>
                    Editar
                    </Button>
                </Card>
            </Col>
            <Col>
                <Card
                    body>
                    <CardTitle tag="h5">
                    Ver Cargos
                    </CardTitle>
                    <Button href="/admin/users/allusers" style={{
                        background: "#2c0808",
                    }}>
                    Ver
                    </Button>
                </Card>
            </Col>
        </Row>
    </div>

    <div className='container justify-content-center text-center' style={{
        marginTop: "20px",
        
    }}>
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

export default Cargos