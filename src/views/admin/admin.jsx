import React from "react";
import Navbar from '../../components/Navbar';
import {Row, Col} from 'reactstrap';

const Admin = () => {
    
    return (
        <div className='admin' style={{
            width: "100%"
        }}>
            <>
            <Navbar/>
            </>
            <div className='container fluid justify-content-center text-center' style={{
                
                marginTop: 10,
                marginBottom: 10
            }}>
                <Row xs={1} md={4} style={{
                    marginTop: 10,
                }}>
                    <Col>
                        <button>
                            Usuarios
                        </button>
                    </Col>
                    
                </Row>
            </div>

        </div>
    );
}

export default Admin;