import React, { useRef } from 'react';
import styled from 'styled-components';
import { API } from '../utils/Config';

const Login = () => {
    const phoneRef = useRef()
    const passRef = useRef()

    function loginFunc() {
        API.post("employee/login", {
            "phoneNumber": "+998993466789",
            "password": "student"
        }).then(res => localStorage.setItem("token", res.data.data.token))

        API.get("car?limit=5&page=1").then((res) => console.log(res.data.data))
    }


    return (
        <LoginWrapper>
            <input type="text" placeholder='phone Number' ref={phoneRef} />
            <input type="text" placeholder='password' ref={passRef} />
            <button onClick={() => loginFunc()}>submit</button>
        </LoginWrapper>
    );
}

export default Login;

const LoginWrapper = styled.div`
    
`
