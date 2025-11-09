import React from 'react';

import Input from '../../atoms/input/Input';
import Button from '../../atoms/Button/Button';

function Login() {
  return (
    <div>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Login</Button>
    </div>
  );
}

export default Login;
