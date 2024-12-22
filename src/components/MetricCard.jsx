import React from "react";

const MetricCard = ({ title, value }) => (
  <div className="bg-white shadow-md rounded-lg p-4 text-center">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-2xl font-bold text-blue-500">{value}</p>
  </div>
);

export default MetricCard;
