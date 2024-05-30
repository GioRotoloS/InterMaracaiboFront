import React, { useState } from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import Navbar from '../../../components/admin/Navbar';
import NewCargo from '../../../components/admin/CargoModal/NewCargo';
import DelCargo from '../../../components/admin/CargoModal/DelCargo';
import EditCargo from '../../../components/admin/CargoModal/EditCargo';

const Cargos = () => {

    const [newCargo, setNewCargo] = useState(false);
    const [delCargo, setDelCargo] = useState(false);
    const [editCargo, setEditCargo] = useState(false);

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
                    <Button onClick={() => setNewCargo((!newCargo))} style={{
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
                    <Button onClick={() => setDelCargo((!delCargo))} style={{
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
                    <Button onClick={() => setEditCargo((!editCargo))} style={{
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
                    <Button href="/admin/positions/allpositions" style={{
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
    <NewCargo estado = {newCargo}
              cambiarEstado = {setNewCargo}/>
    <DelCargo estado = {delCargo}
              cambiarEstado = {setDelCargo}/>
    <EditCargo estado = {editCargo}
              cambiarEstado = {setEditCargo}/>
</div>
  )
}

export default Cargos