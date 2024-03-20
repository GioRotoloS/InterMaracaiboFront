import React from 'react'
import Navbar from '../../components/admin/Navbar';
import { Button, Col, Row } from 'reactstrap'

const Views = () => {
  return (
    <div className='views' style={{
        width: "100%"
    }}>
        <>
        <Navbar/>
        </>
        <div className='container fluid justify-content-center text-center title' style={{
            
            marginTop: 10,
            marginBottom: 10
        }}>
        <h1>Modulos</h1>
            <Row xs={1} md={4} style={{
                marginTop: 10,
            }}>
                <Col>
                    <a className='boton' href='/store'>
                        Almacen
                    </a>
                </Col>
                <Col>
                    <a className='boton' href='/purch'>
                        Compras
                    </a>
                </Col>
                <Col>
                    <a className='boton' href='/entry'>
                        Recibidor
                    </a>
                </Col>
                
            </Row>
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

export default Views