import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import styled from 'styled-components';

const NewUser = ({estado, cambiarEstado}) => {

    const [inputs, setInputs] = useState({
        firstname: "",
        secondname: "",
        firstlastname: "",
        secondlastname: "",
        id: 0,
        user: "",
        pass: "",
    });

    const [err, setError] = useState(null);

    const [data, setData] = useState(null);

    const handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            await axios.post("/auth/register", inputs)
        } catch (err) {
            setError(err.response.data)
        }
    }

    useEffect(() => {
        fetch("/auth/register")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    return ( 

        <>
            { estado && 
                <Overlay>
                    <Contenedor>
                        <Encabezado>
                            <h3>Crear Usuario Nuevo</h3>
                        </Encabezado>
                        <Cerrar onClick={() => cambiarEstado(false)}>X</Cerrar>

                        <Form>
                            <Row md={8}>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="firstname">
                                            Primer Nombre
                                        </Label>
                                        <Input 
                                        id="firstname"
                                        name="firstname"
                                        type="text"
                                        onChange={handleChange}
                                        required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="secondname">
                                            Segundo Nombre
                                        </Label>
                                        <Input 
                                        id="secondname"
                                        name="secondname"
                                        type="text"
                                        onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="firstlastname">
                                            Primer Apellido
                                        </Label>
                                        <Input 
                                        id="firstlastname"
                                        name="firstlastname"
                                        type="text"
                                        onChange={handleChange}
                                        required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="secondlastname">
                                            Segundo Apellido
                                        </Label>
                                        <Input 
                                        id="secondlastname"
                                        name="secondlastname"
                                        type="text"
                                        onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row md={8}>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="id">
                                            Cedula
                                        </Label>
                                        <Input 
                                        id="id"
                                        name="id"
                                        type="number"
                                        onChange={handleChange}
                                        required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="user">
                                            Usuario
                                        </Label>
                                        <Input 
                                        id="user"
                                        name="user"
                                        type="text"
                                        onChange={handleChange}
                                        required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="pass">
                                            Contraseña
                                        </Label>
                                        <Input 
                                        id="pass"
                                        name="pass"
                                        type="password"
                                        onChange={handleChange}
                                        required
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8}> 
                                <FormGroup>
                                    <Label for="dept">
                                    Departamento
                                    </Label>
                                    <Input
                                    id="dept"
                                    name="dept"
                                    placeholder="Departamento"
                                    type="select"
                                    
                                    >
                                        <option disabled selected>
                                            
                                        </option>
                                        <option>
                                            Sistemas
                                        </option>
                                    </Input>
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="cargo">
                                    Cargo
                                    </Label>
                                    <Input
                                    id="cargo"
                                    name="cargo"
                                    type="text"
                                    
                                    >
                                    </Input>
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button onClick={handleSubmit} style={{
                                    background: "#2c0808",
                                    }}>
                                    Crear
                                    </Button>
                                </Col>
                                <Col>
                                    {err && <p>{err}</p>}
                                    {data && <p>{data}</p>}
                                </Col>
                                <Col>
                                    <Button onClick={() => cambiarEstado(false)}>
                                    Cancelar
                                    </Button>
                                </Col>
                                
                            </Row>
                            
                        </Form>
                    </Contenedor>
                </Overlay>

            }
        </>
    );
};

export default NewUser;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Contenedor = styled.div`
    width: 90%;
    height: 450px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    overflow-y: scroll;
`;

const Encabezado = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid;
    h3 {
        font-weight 500;
        font-size: 16px:
    }
`;
const Cerrar = styled.button`
    position: absolute;
    top:20px;
    right: 20px;
`;