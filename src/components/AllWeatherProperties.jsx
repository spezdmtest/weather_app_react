import React from "react";

const AllWeatherProperties = ({ title, value, icon }) => {
  return (
    <div className="property">
      <div className="property-icon">
        <img
          src={`./img/icons/${icon}`}
          alt=""
        />
      </div>
      <div className="property-info">
        <div className="property-info__value">{value}</div>
        <div className="property-info__description">{title}</div>
      </div>
    </div>
  );
};

export default AllWeatherProperties;
