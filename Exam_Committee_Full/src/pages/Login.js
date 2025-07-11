import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    localStorage.setItem("userRole", role);
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h2>تسجيل الدخول</h2>
      <p>اختر نوع المستخدم</p>
      <button onClick={() => handleLogin("committee")}>عضو لجنة</button>
      <button onClick={() => handleLogin("tester")}>مختبر</button>
    </div>
  );
}
