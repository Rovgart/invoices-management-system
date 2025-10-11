import React from "react";
import AuthLayout from "../register/layout";
import LoginForm from "@/components/ui/forms/LoginForm";

function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

export default LoginPage;
