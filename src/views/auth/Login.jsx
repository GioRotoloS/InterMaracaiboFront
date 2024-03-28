import React from 'react';
import { Button, Form, Input, FormGroup  } from 'reactstrap';
import Logo from '../../img/YuShuLogo.png'

const Login = () => {


    return (

        <div className='login'>
            
            <div className='container justify-content-center text-center shadow p-3 mb-5 bg-body border rounded' style={{
                width: 300,
                marginTop: 100
            }}>

              <div>
                <img src={Logo} alt="" style={{
                  marginTop: 20,
                  width: '90%',
                  marginBottom: 20,
                }}/>
              </div>
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
                <Button  color="danger" href='/admin'>
                  Ingresar
                </Button>
              </div>
            </div>
          </div>
        </div>
        
    )
}

export default Login;