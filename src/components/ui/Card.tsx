import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string; // allow custom classes
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
