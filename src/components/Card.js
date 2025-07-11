import React from "react";

const Card = ({ title, subtitle, date, children }) => (
  <div className="bg-slate-100 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-cyan-100">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-sm text-slate-400">{subtitle}</p>
    <p className="text-xs text-slate-500 mb-4">{date}</p>
    {children}
  </div>
);

export default Card;
