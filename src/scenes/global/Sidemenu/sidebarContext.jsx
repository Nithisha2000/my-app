import React, { useState, createContext, useContext } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Sidemenu from "./Sidemenu";



const SidebarContext = createContext({});

export const MyProSidebarProvider = ({ children }) => {
  
  const [sidebarBackgroundColor, setSidebarBackgroundColor] =
    useState(undefined);
  
  return (
    <ProSidebarProvider>
      <SidebarContext.Provider
        value={{
          sidebarBackgroundColor,
          setSidebarBackgroundColor,

          

          
        }}
      >
        <div
          style={{
            display: "flex",
            
            
          }}
        >
          <Sidemenu/>
          {children}
        </div>
      </SidebarContext.Provider>
    </ProSidebarProvider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);