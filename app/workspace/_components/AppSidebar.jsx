import React from "react";

import Image from "next/image";

import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../../@/components/ui/sidebar";
import { Button } from "../../../components/ui/button";
import { title } from "process";
import { Book, BookIcon, Compass, Layout, LayoutDashboard, PencilRulerIcon, UserIcon } from "lucide-react";

const SideBarOptions=[
    {
        title:'Dashboard',
        icon: LayoutDashboard,
        path: '/#'
    },
    {
        title:'My Learning',
        icon: Book,
        path: '/workspace/my-courses'
    },
    {
        title:'Explore Courses',
        icon: Compass,
        path: '/workspace/explore'
    },
    {
        title:'AI Tools',
        icon: PencilRulerIcon,
        path: '/workspace/ai-tools'
    },
    {
        title:'Billing',
        icon: BookIcon,
        path: '/workspace/billing'
    },
    {
        title:'Profile',
        icon: UserIcon,
        path: '/workspace/profile'
    }
    
]

export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className={'p-4'}>
                <Image src={'/logo.svg'} alt='logo' width={130} height={120} />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <Button>Create New Course</Button>
                </SidebarGroup >
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {SideBarOptions.map((item, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.path}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}