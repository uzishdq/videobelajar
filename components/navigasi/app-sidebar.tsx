"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ROUTES } from "@/lib/constant";
import { Database, GraduationCap } from "lucide-react";
import Link from "next/link";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = {
    user: {
      name: "Admin",
      email: "admin@test.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Master",
        url: "#",
        icon: Database,
        items: [
          {
            title: "Kategori",
            url: ROUTES.AUTH.ADMIN.INDEX,
          },
        ],
      },
    ],
  };
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link href={ROUTES.PUBLIC.INDEX}>
                <GraduationCap className="h-10 w-10" />
                <span className="text-xl font-semibold">Videobelajarmu</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
