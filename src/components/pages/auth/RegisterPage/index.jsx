import React from 'react';

import AuthLayout from '../../../templates/AuthLayout';
import { Register } from '../../../organisms/auth';

function RegisterPage() {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  );
}

export default RegisterPage;
