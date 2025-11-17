import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';

import { setCreateUser } from '../../../redux/slices/authSlice';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/Button/Button';
import { useLoginMutation } from '../../../api/authApi';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser] = useLoginMutation();
  const [setCookie] = useCookies(['token']);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handelStorageData = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handelLogin = async () => {
    try {
      const result = await loginUser(user).unwrap();
      const { token, role, ...userData } = result.data;
      dispatch(setCreateUser({ token, user: userData }));
      setCookie('token', token, { path: '/' });
      role === 'admin' ? navigate('/admin') : navigate('/store');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-1/3">
      <Input type="email" name="email" onChange={(e) => handelStorageData(e)} placeholder="Email" />
      <Input
        type="password"
        name="password"
        onChange={(e) => handelStorageData(e)}
        placeholder="Password"
      />
      <Button type="submit" size="md" variant="secondary" onClick={handelLogin}>
        Login
      </Button>
    </div>
  );
}

export default Login;
