import React, { useState } from "react";
import "./App.css";
// import ZoneCard from "./ZoneCard";
import ZoneCard from './components/ZoneCard';

const Zones = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [openDropdown, setOpenDropdown] = useState(null);

  // Ek hi zone ka data
  const baseZone = {
    name: "Lahore Division",
    totalCities: 4,
    regionName: "Punjab Region",
    tags: [
      { name: "Sheikhupura", color: "blue" },
      { name: "Nankana Sahib", color: "red" },
    ],
  };

  // this base object render 4 times
  const zonesData = Array(4).fill(baseZone);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <img
            src="/assets/images/logo.jpg"
            alt="Pakistan Flag"
            style={{
              width: "70px",
              height: "30px",
              objectFit: "cover",
              paddingLeft: "20px",
              paddingRight: "11px",
            }}
          />
          Sale BYT
        </div>
        <div className="nav">
          <a href="#"><i className="ri-briefcase-line"></i> Orders</a>
          <a href="#"><i className="ri-route-line"></i> Routes</a>
          <a href="#"><i className="ri-map-pin-line"></i> Zones</a>
          <a href="#"><i className="ri-flag-line"></i> Regions</a>
          <a href="#">
            <i className="ri-box-3-line"></i> Products
            <i className="bi bi-chevron-down" style={{ paddingLeft: "70px" }}></i>
          </a>
          <a href="#">
            <i className="ri-store-2-line"></i> Shops
            <i className="bi bi-chevron-down" style={{ paddingLeft: "88px" }}></i>
          </a>
          <a href="#"><i className="ri-truck-line"></i> Distributers</a>
          <a href="#"><i className="ri-user-line"></i> Staff</a>
          <a href="#"><i className="ri-group-line"></i> Employees</a>
          <a href="#"><i className="ri-settings-3-line"></i> Settings</a>
        </div>
      </div>

      {/* Main content */}
      <div className="main flex-grow-1">
        {/* Topbar */}
        <div className="topbar">
          <button className="back-btn">
            <img
              src="/assets/images/SideBarArrow.svg"
              alt="Pakistan Flag"
              style={{ width: "32px", height: "24px", objectFit: "cover" }}
            />
          </button>
          <div className="topbar-right">
            <span><i className="bi bi-bell"></i></span>
            <img
              src="/assets/images/pkFlag1.svg"
              alt="Pakistan Flag"
              style={{ width: "28px", height: "20px", objectFit: "cover" }}
            />
            <img
              src="/assets/images/profile.svg"
              alt="Profile"
              className="profile-pic"
              style={{ width: "32px", height: "32px" }}
            />
          </div>
        </div>

        {/* Content header */}
        <div className="content-header">
          <div className="topbar-left">
            <h1>Zones</h1>
            <div className="tabs">
              <div
                className={`tab ${activeTab === "Active" ? "active" : ""}`}
                onClick={() => setActiveTab("Active")}
              >
                Active
              </div>
              <div
                className={`tab ${activeTab === "Archive" ? "active" : ""}`}
                onClick={() => setActiveTab("Archive")}
              >
                Archive
              </div>
            </div>
          </div>
          <button className="create-btn">+ Create Zone</button>
        </div>

        {/* Zones Grid */}
        <div className="zones-grid">
          {zonesData.map((zone, index) => (
            <ZoneCard
              key={index}
              zone={zone}
              index={index}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Zones;
