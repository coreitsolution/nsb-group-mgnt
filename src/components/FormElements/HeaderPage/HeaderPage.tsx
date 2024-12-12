import React from "react";
import "./HeaderPage.css";

interface HeaderPageProps {
  name: string;
}

export default function HeaderPage({ name }: HeaderPageProps) {
  return (
    <div className="mb-4">
      <p className="header">{name}</p>
    </div>
  );
}
