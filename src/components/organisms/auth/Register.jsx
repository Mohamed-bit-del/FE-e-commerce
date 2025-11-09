import React from 'react';

import Input from '../../atoms/input/Input';
import Button from '../../atoms/Button/Button';

function Register() {
  return (
    <div>
      <Input type="text" placeholder="Username" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <Button>Login</Button>
    </div>
  );
}

export default Register;
