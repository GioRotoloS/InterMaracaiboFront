import React, { useState } from 'react'
import Navbar from '../../components/admin/Navbar';
import { Button, Col, Input, Label, Row, Table } from 'reactstrap';
import DetalleC from '../../components/Finanzas/DetalleC';

const AllUsers = () => {

    const [detalleC, setDetalleC] = useState(false);

  return (
    <div className='ordenesC'>
        <>
            <Navbar/>
        </>

        <div className='justify-content-center text-center title'>
            <h1>Usuarios</h1>
        </div>

        <div className='container fluid justify-content-center mt-5 text-center'>
            <Row>
                <Col md={5}>
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
                </Col>
                <Col md={5}>
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
                        <option>
                            Alfabetico
                        </option>
                    </Input>
                </Col>
                <Col md={2}>
                    <Button style={{
                    background: "#2c0808",
                    marginTop: "32px"
                    }}>Buscar
                    </Button>
                </Col>
            </Row>
        </div>

        <div className='container justify-content-center text-center' style={{
            marginTop: "20px",
            
        }}>
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
                            Usuario
                        </th>
                        <th scope='col' style={{
                            backgroundColor: "#2c0808",
                            color: "white"
                        }}>
                            Primer Nombre

                        </th>
                        <th scope='col' style={{
                            backgroundColor: "#2c0808",
                            color: "white"
                        }}>
                            Primer Apellido
                        </th>
                        <th scope='col' style={{
                            backgroundColor: "#2c0808",
                            color: "white"
                        }}>
                            Departamento
                        </th>
                        <th scope='col' style={{
                            backgroundColor: "#2c0808",
                            color: "white"
                        }}>
                            Cargo
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row' data-label="#">
                            1
                        </th>
                        <td data-label="Usuario">
                            Sistemas
                        </td>
                        <td data-label="Primer Nombre">
                            Giovanna
                        </td>
                        <td data-label="Primer Apellido">
                            Rotolo
                        </td>
                        <td data-label="Departamento">
                            Sistemas
                        </td>
                        <td data-label="Cargo">
                            admin
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Button style={{
            background: "#2c0808",
            marginTop: "32px"
            }} href="/admin/users">
                Volver
            </Button>
        </div>
        <DetalleC estado = {detalleC}
                cambiarEstado = {setDetalleC}/>
    </div>
  )
}

export default AllUsers