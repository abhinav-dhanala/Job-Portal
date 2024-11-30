import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  console.log("AppLayout is rendering");
  return (
    <div>
      <div className="grid-background"></div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
