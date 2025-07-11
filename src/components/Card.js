import React from "react";

const Card = ({ title, subtitle, date, children }) => (
  <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-sm text-slate-400">{subtitle}</p>
    <p className="text-xs text-slate-500 mb-4">{date}</p>
    {children}
  </div>
);

export default Card;
