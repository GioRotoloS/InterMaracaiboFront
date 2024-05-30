import React from 'react'
import Navbar from '../../../components/admin/Navbar';
import { Button, Col, Input, Label, Row, Table } from 'reactstrap';

const AllCargos = () => {

  return (
    <div className='AllUsers'>
        <>
            <Navbar/>
        </>

        <div className='justify-content-center text-center title'>
            <h1>Cargos</h1>
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
                            Departamento
                        </th>
                        <th scope='col' style={{
                            backgroundColor: "#2c0808",
                            color: "white"
                        }}>
                            Cargo
                        </th>
                        <th scope='col' style={{
                            backgroundColor: "#2c0808",
                            color: "white"
                        }}>
                            Usuario 1
                        </th>
                        <th scope='col' style={{
                            backgroundColor: "#2c0808",
                            color: "white"
                        }}>
                            Usuario 2
                        </th>
                        <th scope='col' style={{
                            backgroundColor: "#2c0808",
                            color: "white"
                        }}>
                            Usuario 3
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row' data-label="#">
                            1
                        </th>
                        <td data-label="Departamento">
                            Sistemas
                        </td>
                        <td data-label="Cargo">
                            admin
                        </td>
                        <td data-label="Usuario 1">
                            Usuario 1
                        </td>
                        <td data-label="Usuario 2">
                            Usuario 2
                        </td>
                        <td data-label="Usuario 3">
                            Usuario 3
                        </td>
                        
                    </tr>
                </tbody>
            </Table>
            <Button style={{
            background: "#2c0808",
            marginTop: "32px"
            }} href="/admin/positions">
                Volver
            </Button>
        </div>
    </div>
  )
}

export default AllCargos