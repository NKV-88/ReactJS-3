import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
  } from "mdbreact";



export default class Login extends React.Component {
   render(){
        return <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Вход в личный кабинет:
                  </h3>
                </MDBCardHeader>
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Веддите логин"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Введите пароль"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
  
                <div className="text-center mt-4">
                  <MDBBtn
                    color="light-blue"
                    className="mb-3"
                    type="submit"
                  >
                    Войти
                  </MDBBtn>
                </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    }
}
