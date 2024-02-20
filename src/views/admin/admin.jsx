import React from "react";
import Navbar from '../../components/Navbar';
import {Button, Row, Col} from 'reactstrap';

const Admin = () => {
    
    return (
        <div className='admin'>
        <>
        <Navbar/>
        </>
        <p>Prueba</p>
        <div className='container fluid justify-content-center text-center' style={{
            width: 700,
            marginTop: 10,
            marginBottom: 10
        }}>
            <Row xs={1} md={3} style={{
                marginTop: 10,
            }}>
                <Col>
                    <Button>
                        Prueba
                    </Button>
                </Col>
                <Col>
                    <Button>
                        Prueba
                    </Button>
                </Col>
                <Col>
                    <Button>
                        Prueba
                    </Button>
                </Col>
            </Row>
        </div>

    </div>
    );
}

export default Admin;