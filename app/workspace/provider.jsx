import { SidebarProvider, SidebarTrigger } from "..//workspace/_components/AppSidebar";
import React from "react";

function WorkspaceProvider({ children }) {
  return ( 
    <SidebarProvider>
        <SidebarTrigger />
      <div>{children}</div>
    </SidebarProvider>
  )
}

export default WorkspaceProvider;
