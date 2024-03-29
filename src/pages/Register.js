import React,{useState} from "react";
import {Form,Input,message} from "antd";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
import Spinner from "../components/Layout/Spinner";

const Register = () => {
const navigate = useNavigate();
const[loading,setLoading] =useState(false);
    const submitHandler = async (values) =>{
        try{
            setLoading(true);
            await axios.post('/users/register',values);
            message.success('registeration successfull');
            setLoading(false);
            navigate('/login');
        } catch(error){
            setLoading(false);
            message.error('something went wrong');
        }
    };
    return(
        <>
        <div className="register-page">
            {loading && <Spinner/>}
            <Form layout="vertical" onFinish={submitHandler}>
                <h1>register form</h1>
                <Form.Item label="Name" name="name">
                    <Input/>
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input type="email"/>
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input type="password"/>
                </Form.Item>
                <div className="d-flex justify-content-between">
                    <Link to="/login">Already registered? click here to login</Link>
                    <button className="btn btn-primary">Register</button>
                </div>
            </Form>
        </div>

        </>
    );
};

export default Register