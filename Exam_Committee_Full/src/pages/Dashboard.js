import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [role, setRole] = useState("");

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    setRole(userRole);
  }, []);

  return (
    <div>
      <h2>لوحة التحكم</h2>
      {role === "committee" ? (
        <ul>
          <li>📘 إدارة المواد</li>
          <li>❓ إدارة الأسئلة</li>
          <li>🧪 إنشاء الاختبارات</li>
          <li>📊 عرض الدرجات</li>
        </ul>
      ) : (
        <ul>
          <li>📘 عرض المواد</li>
          <li>🧪 أداء الاختبارات</li>
          <li>📊 نتيجة الاختبار</li>
        </ul>
      )}
    </div>
  );
}
