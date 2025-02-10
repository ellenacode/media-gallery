import { FolderOpen, ChevronDown } from "lucide-react"
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
import { filters, folders, gallery } from "../constants"
import { useDispatch, useSelector } from "react-redux"
import { setItems, setSelectedFolder, setSelectedFilters, setCounter } from "../actions/gallery"
import { useEffect } from "react"

export function AppSidebar() {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.gallery.items)
    const selectedFolder = useSelector((state) => state.gallery.selectedFolder)
    const selectedFilters = useSelector((state) => state.gallery.selectedFilters)
    const counter = useSelector((state) => state.gallery.counter)

    const filterType = selectedFilters?.map(item => item.type)
    const filteredItems = items?.filter(element => filterType.join(',').includes(element.format))

    useEffect(() => {
        if (selectedFolder === 'Your folder') {
            dispatch(setItems(gallery))
        } else {
            dispatch(setItems([]))
        }
        dispatch(setCounter(items.length))

    }, [selectedFolder])

    const handleSelectFolder = (item) => {
        dispatch(setSelectedFolder(item.title))
    }

    const handleSelectFilter = (checked, item) => {
        let items = [...selectedFilters]
        if (checked) {
            items.push(item)
        } else {
            items = items?.filter(element => element.id !== item.id)
        }
        dispatch(setSelectedFilters(items))
    }
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
                            {folders.map(item => (
                                <SidebarMenuItem key={item.id}>
                                    <SidebarMenuButton asChild onClick={() => handleSelectFolder(item)}>
                                        <div className={`flex items-center gap-2 ${selectedFolder === item.title ? 'bg-secondary' : ''}`}>
                                            <FolderOpen size={16} />
                                            <span>{item.title}</span>
                                            <Badge variant="outline">
                                                {selectedFolder !== item.title ? counter : items.length}
                                            </Badge>
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Filters</SidebarGroupLabel>
                    <Collapsible defaultOpen className="group/collapsible">
                        <SidebarGroup>
                            <SidebarGroupLabel asChild className="px-0">
                                <div className="flex justify-between items-center">
                                    <CollapsibleTrigger asChild>
                                        <div className="flex items-center gap-2">
                                            <span>Media Type</span>
                                            <ChevronDown className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                        </div>
                                    </CollapsibleTrigger>
                                    <Checkbox
                                        className="mx-1"
                                        checked={selectedFilters.length === filters.length}
                                        onCheckedChange={(checked) => dispatch(setSelectedFilters(checked ? filters : []))}
                                    />
                                </div>
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
                                                            <Badge variant="outline">{
                                                                item.title === "GIFs" ?
                                                                    filteredItems.filter(value => value.format === item.type)?.length
                                                                    : item.title === 'Images' ?
                                                                        filteredItems.filter(value => item.type.includes(value.format))?.length
                                                                        : filteredItems.filter(value => value.format === 'mp4')?.length
                                                            }
                                                            </Badge>
                                                        </div>
                                                        <Checkbox
                                                            className="mx-1"
                                                            checked={!!selectedFilters?.filter(element => element.id === item.id)?.length}
                                                            onCheckedChange={(checked) => handleSelectFilter(checked, item)}
                                                        />
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