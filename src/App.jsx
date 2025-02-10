import { AppSidebar } from "@/components/AppSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Gallery } from "./components/Gallery"

export default function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Gallery />
    </SidebarProvider>
  )
}