import { Image, Play, ImagePlay, FolderOpen, ChevronDown } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
} from "@/components/ui/sidebar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import Logo from "../assets/logo.svg"

// Filter items
const filters = [
    {
        title: "Images",
        icon: Image,
    },
    {
        title: "Videos",
        icon: Play,
    },
    {
        title: "GIFs",
        icon: ImagePlay,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex gap-2 items-center">
                    <img src={Logo} />
                    <span>Media Gallery</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Folders</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <FolderOpen size={16} />
                                            <span>Your folder</span>
                                            <Badge variant="outline">0</Badge>
                                        </div>
                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <FolderOpen size={16} />
                                            <span>New folder</span>
                                            <Badge variant="outline">0</Badge>
                                        </div>
                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Filters</SidebarGroupLabel>
                    <Collapsible defaultOpen className="group/collapsible">
                        <SidebarGroup>
                            <SidebarGroupLabel asChild className="px-0">
                                <CollapsibleTrigger asChild>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <span>Media Type</span>
                                            <ChevronDown className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                        </div>
                                        <Checkbox className="mx-1" />
                                    </div>
                                </CollapsibleTrigger>
                            </SidebarGroupLabel>

                            <CollapsibleContent>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {filters.map((item) => (
                                            <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton asChild className="px-0">
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-2">
                                                            <item.icon size={16} />
                                                            <span>{item.title}</span>
                                                            <Badge variant="outline">0</Badge>
                                                        </div>
                                                        <Checkbox className="mx-1" />
                                                    </div>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </CollapsibleContent>
                        </SidebarGroup>
                    </Collapsible>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}