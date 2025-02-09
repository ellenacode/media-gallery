import { AppSidebar } from "@/components/AppSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

export default function App() {

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className="flex items-center space-x-0.5 m-2">
          <Checkbox />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Badge variant="outline">0</Badge>selected
          </label>
        </div>
        <Separator className="my-4" />
      </main>
    </SidebarProvider>
  )
}