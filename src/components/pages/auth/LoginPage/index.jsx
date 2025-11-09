import React from 'react';

import AuthLayout from '../../../templates/AuthLayout';
import { Login } from '../../../organisms/auth';

function LoginPage() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}

export default LoginPage;