import React from "react";

import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "../../../@/components/ui/sidebar";
 
export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <Image src={'/logo.svg'} alt='logo' width={120} height={100} />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}