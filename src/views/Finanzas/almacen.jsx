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
        
        <div className='container fluid justify-content-center text-center title' style={{
            marginTop: 10
        }}>
        <h1>Almacen</h1>
            <Row md={4}  style={{
                marginTop: 30,
            }}>
                <Col>
                    <Card
                        body
                        className="">
                        <CardTitle tag="h5">
                        Requisición de Compra
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
                        Estado de Requisición
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
                        Recepción de Mercancia
                        </CardTitle>
                        <Button style={{
                            background: "#2c0808",
                        }}>
                        Agregar
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
            <Row md={4}  style={{
                marginTop: 30,
            }}>
                <Col>
                    <Card
                        body>
                        <CardTitle tag="h5">
                        Almacen en Existencia
                        </CardTitle>
                        <Button style={{
                            background: "#2c0808",
                        }}>
                        Visualizar
                        </Button>
                    </Card>
                </Col>
                <Col>
                    <Card
                        body>
                        <CardTitle tag="h5">
                        Creación de Artículo Nuevo
                        </CardTitle>
                        <Button style={{
                            background: "#2c0808",
                        }}>
                        Agregar
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>

        <div className='container justify-content-center text-center' style={{
            marginTop: "20px",
            
        }}>

        <h3>Ultimos Movimientos</h3>
            <Table className='tabla' responsive striped>
                <thead>
                    <tr>
                        <th scope='col' style={{
                            backgroundColor: "#2c0808",
                            color: "white"
                        }}>
                            #
                        </th>
                        <th scope='col' style={{
                            backgroundColor: "#2c0808",
                            color: "white"
                        }}>
                            First Name
                        </th>
                        <th scope='col' style={{
                            backgroundColor: "#2c0808",
                            color: "white"
                        }}>
                            Last Name
                        </th>
                        <th scope='col' style={{
                            backgroundColor: "#2c0808",
                            color: "white"
                        }}>
                            Username
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" data-label="#">
                            1
                        </th>
                        <td data-label="First Name">
                            Mark
                        </td>
                        <td data-label="Last Name">
                            Otto
                        </td>
                        <td data-label="Username">
                            @mdo
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" data-label="#">
                            2
                        </th>
                        <td data-label="First Name">
                            Jacob
                        </td>
                        <td data-label="Last Name">
                            Thornton
                        </td>
                        <td data-label="Username">
                            @fat
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" data-label="#">
                            3
                        </th>
                        <td data-label="First Name">
                            Larry
                        </td>
                        <td data-label="Last Name">
                            the Bird
                        </td>
                        <td data-label="Username">
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