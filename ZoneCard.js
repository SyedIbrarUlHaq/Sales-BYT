import React from "react";

const ZoneCard = ({ zone, index, openDropdown, toggleDropdown }) => {
  return (
    <div className="zone-card">
      <div className="zone-header">
        <h3>{zone.name}</h3>
        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown(index)}
          >
            <i className="bi bi-three-dots-vertical"></i>
          </button>
          {openDropdown === index && (
            <div className="dropdown-menu" style={{ display: "block" }}>
              <button>
                <i className="bi bi-pen"></i> Edit
              </button>
              <button className="delete">
                <i className="bi bi-trash3"></i> Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <p className="info-line-cities">
        Total Cities:<span>{zone.totalCities}</span>
      </p>
      <p className="info-line-region">
        Region Name:<span>{zone.regionName}</span>
      </p>
      {zone.tags.map((tag, i) => (
        <span key={i} className={`tag ${tag.color}`}>
          {tag.name} <i className="bi bi-x-lg"></i>
        </span>
      ))}
    </div>
  );
};

export default ZoneCard;
