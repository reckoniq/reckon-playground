import * as React from "react"
import {
  AudioWaveform,
  
  Bot,
  
  
  GalleryVerticalEnd,
  
  
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "~/components/nav-main"

import { NavUser } from "~/components/nav-user"
import { TeamSwitcher } from "~/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Christian Sykes",
    email: "christian@reckoniq.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "wwww.spark.co.nz",
      logo: GalleryVerticalEnd,
      
    },
    {
      name: "www.vodafone.co.nz",
      logo: AudioWaveform,
      plan: "Startup",
    },
    
  ],
  navMain: [
    {
      title: "Reckons",
      url: "#",
      icon: SquareTerminal,
      isActive: true,      
    },
    {
      title: "Tasks",
      url: "#",
      icon: Bot,
      
    },

    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      isActive: true,
      items: [
        {
          title: "Users",
          url: "#",
        },
        {
          title: "Competitors",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
   
      ],
    },
  ],
  
}

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
  )
}
