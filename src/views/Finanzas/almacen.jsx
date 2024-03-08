import React, { useState } from 'react'
import { Button, Card, CardTitle, Col, Row, Table } from 'reactstrap'
import Navbar from '../../components/Navbar';
import ModalRC from '../../components/ModalRC';

const Almacen = () => {

    const [modalRC, setModalRC] = useState(false);
    

  return (

    <div className='almacen'>
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
                        body
                        className="">
                        <CardTitle tag="h5">
                        Requisicion de Compras
                        </CardTitle>
                        <Button onClick={() => setModalRC((!modalRC))} style={{
                            background: "#2c0808",
                        }}>
                        Realizar
                        </Button>
                    </Card>
                </Col>
                <Col>
                    <Card
                        body>
                        <CardTitle tag="h5">
                        Estado de Requisicion
                        </CardTitle>
                        <Button style={{
                            background: "#2c0808",
                        }}>
                        Comprobar
                        </Button>
                    </Card>
                </Col>
                <Col>
                
                    <Card
                        body>
                        <CardTitle tag="h5">
                        Solicitudes de Mercancia
                        </CardTitle>
                        <Button style={{
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
                        Despacho de Mercancia
                        </CardTitle>
                        <Button style={{
                            background: "#2c0808",
                        }}>
                        Despachar
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>

        <div className='container justify-content-center text-center' style={{
            marginTop: "20px",
            
        }}>
            <Table bordered hover responsive striped>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Username
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Mark
                        </td>
                        <td>
                            Otto
                        </td>
                        <td>
                            @mdo
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            2
                        </th>
                        <td>
                            Jacob
                        </td>
                        <td>
                            Thornton
                        </td>
                        <td>
                            @fat
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            3
                        </th>
                        <td>
                            Larry
                        </td>
                        <td>
                            the Bird
                        </td>
                        <td>
                            @twitter
                        </td>
                    </tr>
                    
                </tbody>
            </Table>
        </div>
        <ModalRC estado = {modalRC}
                 cambiarEstado = {setModalRC}/>
    </div>
  );
}

export default Almacen