import React, { type ReactNode } from "react";

interface FormBoxProps {
  title?: string;
  children: ReactNode;
}

const FormBox: React.FC<FormBoxProps> = ({ title, children }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "10px 16px",
        borderRadius: "8px",
        border: "1px solid rgba(0,0,0,0.1)",
        boxShadow: "0 0 10px rgba(0,0,0,0.20)",
        backgroundColor: "#fff",
      }}
    >
      {title && (
        <h3
          style={{
            color: "#7d0c0c",
            margin: "1px 0 8px 0",
            borderBottom: "1px solid #000000ff",
            paddingBottom: "4px",
          }}
        >
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default FormBox;
