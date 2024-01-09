import React from "react";
import "./Card.css";

export default function Card({ name, color}) {
  const cardClassName = `card card- - ${color}`;

  return (
  <div className={cardClassName}>
    {name}
  </div>
  );
}
