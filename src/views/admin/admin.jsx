import React from "react";
import Navbar from '../../components/admin/Navbar';
import {Row, Col} from 'reactstrap';

const Admin = () => {
    
    return (
        <div className='admin' style={{
            width: "100%"
        }}>
            <>
            <Navbar/>
            </>
            <div className='container fluid justify-content-center text-center title' style={{
                
                marginTop: 10,
                marginBottom: 10
            }}>
                <h1>Administrador</h1>
                <Row xs={1} md={4} style={{
                    marginTop: 10,
                }}>
                    <Col>
                        <a href="/admin/users" className="boton">
                            Usuarios
                        </a>
                    </Col>
                    <Col>
                        <a href="/admin/permit" className="boton">
                            Permisos
                        </a>
                    </Col>
                    <Col>
                        <a href="/admin/positions" className="boton">
                            Cargos
                        </a>
                    </Col>
                    <Col>
                        <a href='/admin/dept' className="boton">
                            Departamentos
                        </a>
                    </Col>
                </Row>
                <Row xs={1} md={4} style={{
                    marginTop: 10,
                }}>
                    <Col>
                        <a href='/admin/views' className="boton">
                            Modulos
                        </a>
                    </Col>
                </Row>
            </div>

        </div>
    );
}

export default Admin;