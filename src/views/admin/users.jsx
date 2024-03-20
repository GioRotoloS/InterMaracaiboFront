import React, { useState } from 'react'
import { Button, Card, CardTitle, Col, Row, Table } from 'reactstrap'
import Navbar from '../../components/admin/Navbar';
import NewUser from '../../components/admin/NewUser';
import DelUser from '../../components/admin/DelUser';
import EditUser from '../../components/admin/EditUser';

const Users = () => {

    const [newUser, setNewUser] = useState(false);
    const [delUser, setDelUser] = useState(false);
    const [editUser, setEditUser] = useState(false);

  return (
    <div className='users'>
    <>
    <Navbar/>
    </>
    
    <div className='container fluid justify-content-center text-center title' style={{
        marginTop: 10
    }}>
    <h1>Usuarios</h1>
        <Row md={4}  style={{
            marginTop: 30,
        }}>
            <Col>
                <Card
                    body
                    className="">
                    <CardTitle tag="h5">
                    Crear Usuario
                    </CardTitle>
                    <Button onClick={() => setNewUser((!newUser))} style={{
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
                    Eliminar Usuario
                    </CardTitle>
                    <Button onClick={() => setDelUser((!delUser))} style={{
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
                    Editar Usuario
                    </CardTitle>
                    <Button onClick={() => setEditUser((!editUser))} style={{
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
                    Ver Usuarios
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

    <h3>Últimos Usuarios</h3>
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
                        Nombre
                    </th>
                    <th scope='col' style={{
                        backgroundColor: "#2c0808",
                        color: "white"
                    }}>
                        Apellido
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
                    <th scope="row" data-label="#">
                        1
                    </th>
                    <td data-label="Nombre">
                        Mark
                    </td>
                    <td data-label="Apellido">
                        Otto
                    </td>
                    <td data-label="Usuario">
                        @mdo
                    </td>
                    <td data-label="Departamento">
                        Sistemas
                    </td>
                    <td data-label="Cargo">
                        Admin
                    </td>
                </tr>
            </tbody>
        </Table>
        <Button style={{
            background: "#2c0808",
            marginTop: "32px"
            }} href="/admin">
                Volver
        </Button>
    </div>
    <NewUser estado = {newUser}
            cambiarEstado = {setNewUser}/>
    <DelUser estado={delUser}
            cambiarEstado={setDelUser}/>
    <EditUser estado={editUser}
            cambiarEstado={setEditUser}/>
</div>
  )
}

export default Users