import React, { useEffect, useState } from 'react'
import { Button, Card, CardTitle, Col, Row, Table } from 'reactstrap'
import axios from 'axios';
import Navbar from '../../../components/admin/Navbar';
import NewUser from '../../../components/admin/UserModal/NewUser';
import DelUser from '../../../components/admin/UserModal/DelUser';
import EditUser from '../../../components/admin/UserModal/EditUser';

const Users = () => {

    const [newUser, setNewUser] = useState(false);
    const [delUser, setDelUser] = useState(false);
    const [editUser, setEditUser] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            try {
                
                const res = await axios.get("/auth/users");
                setUsers(res.data);

            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

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

    <h3>Usuarios Creados</h3>
        <Table className='tabla' responsive striped>
            <thead>
                <tr>
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
                        Cedula
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
                {users.map((user)=>(
                    <tr>
                        <th scope="row" data-label="Usuario">
                            {user.User}
                        </th>
                        <td data-label="Nombre">
                            {user.FirstName}
                        </td>
                        <td data-label="Apellido">
                            {user.FirstLastName}
                        </td>
                        <td data-label="Cedula">
                            {user.Id}
                        </td>
                        <td data-label="Departamento">
                            Sistemas
                        </td>
                        <td data-label="Cargo">
                            Admin
                        </td>
                    </tr>
                ))}
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