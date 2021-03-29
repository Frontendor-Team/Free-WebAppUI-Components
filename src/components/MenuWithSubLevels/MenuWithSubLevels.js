import React from 'react';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import './MenuWithSubLevels.css';

function SidebarWithSubLevels({ sidebarData }) {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-header">
        <SidebarHeader />
      </div>

      <SidebarMenu sidebarData={sidebarData} />
    </div>
  );
}

export default SidebarWithSubLevels;