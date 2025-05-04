// components/Card.tsx
import React from "react";

type CardProps = {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
};

const Card = ({ header, body, footer }: CardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border max-w-md mx-auto">
      <div className="px-6 py-4 border-b">{header}</div>
      <div className="px-6 py-4">{body}</div>
      <div className="px-6 py-4 border-t bg-gray-50">{footer}</div>
    </div>
  );
};

export default Card;
