import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import { Button, Col, Input, Label, Row, Table } from 'reactstrap';
import DetalleC from '../../components/DetalleC';

const OrdenesC = () => {

    const [detalleC, setDetalleC] = useState(false);

  return (
    <div className='ordenesC'>
        <>
            <Navbar/>
        </>

        <div className='justify-content-center text-center title'>
            <h1>Ordenes de Compra</h1>
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
                <Col md={2}>
                    <Label for="date">
                        Fecha
                    </Label>
                    <Input
                    id="date"
                    name="date"
                    placeholder="Fecha"
                    type="date"
                    required
                    >
                    </Input>
                </Col>
                <Col md={3}>
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
                    </Input>
                </Col>
                <Col>
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
                            Cantidad de Productos

                        </th>
                        <th scope='col' style={{
                            backgroundColor: "#2c0808",
                            color: "white"
                        }}>
                            Fecha
                        </th>
                        <th scope='col' style={{
                            backgroundColor: "#2c0808",
                            color: "white"
                        }}>
                            
                        </th>
                        <th scope='col' style={{
                            backgroundColor: "#2c0808",
                            color: "white"
                        }}>
                            
                        </th>
                        <th scope='col' style={{
                            backgroundColor: "#2c0808",
                            color: "white"
                        }}>
                            
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
                        <td data-label="Cantidad de Productos">
                            4
                        </td>
                        <td data-label="Fecha">
                            09/03/2024
                        </td>
                        <td className='justify-content-center text-center'>
                            <button onClick={() => setDetalleC((!detalleC))} className='tablaB'>Detalles</button>
                        </td>
                        <td className='justify-content-center text-center'>
                            <button className='tablaB'>Procesar</button>
                        </td>
                        <td className='justify-content-center text-center'>
                            <button className='tablaB'>Anular</button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Button style={{
            background: "#2c0808",
            marginTop: "32px"
            }} href="/purch">
                Volver
            </Button>
        </div>
        <DetalleC estado = {detalleC}
                cambiarEstado = {setDetalleC}/>
    </div>
  )
}

export default OrdenesC