"use client";

import * as React from "react";
import { Brush, GalleryVerticalEnd, Gamepad } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Sai Mayank",
    email: "saimayank.v@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Valorant Database",
      logo: GalleryVerticalEnd,
      plan: "V25",
    },
  ],
  navMain: [
    {
      title: "Game Details",
      url: "#",
      icon: Gamepad,
      isActive: true,
      items: [
        {
          title: "Agents",
          url: "/dashboard/agents",
        },
        {
          title: "Weapons",
          url: "/dashboard/weapons",
        },
        {
          title: "Gamemodes",
          url: "/dashboard/gamemodes",
        },
        {
          title: "Maps",
          url: "/dashboard/maps",
        },
      ],
    },
    {
      title: "Cosmetics",
      url: "#",
      icon: Brush,
      items: [
        {
          title: "Bundles",
          url: "/dashboard/bundles",
        },
        {
          title: "Buddies",
          url: "/dashboard/buddies",
        },
        {
          title: "Player Cards",
          url: "/dashboard/player-cards",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
