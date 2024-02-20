import React from 'react';
import Navbar from '../../components/Navbar';
import { Button, Form, Input, FormGroup  } from 'reactstrap';

const Login = () => {


    return (

        <div className='login'>
            <>
            <Navbar/>
            </>
            <div className='container justify-content-center text-center shadow p-3 mb-5 bg-body border rounded' style={{
                width: 300,
                marginTop: 100
            }}>
                <h5>
                Inicio de Sesion
                </h5>
                <div style={{
                padding: 20
                }}>
                <Form>
                
                  <FormGroup>
                    <Input id="Email" name="email" placeholder="Email" type="email"/>
                  </FormGroup>
                
    
                <FormGroup>
                <Input id="Pass" name="pass" placeholder="Contraseña" type="password"/>
                </FormGroup>
              </Form>
              <div className='d-grid gap-2 col-9 mx-auto'>
                <Button style={{
                  background: "#0c5aa9"
                }}>
                  Ingresar
                </Button>
              </div>
            </div>
          </div>
        </div>
        
    )
}

export default Login;