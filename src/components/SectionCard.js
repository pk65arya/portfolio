import React from "react";

const SectionCard = ({ children }) => (
  <div className="bg-slate-100 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-cyan-100">
    {children}
  </div>
);

export default SectionCard;
