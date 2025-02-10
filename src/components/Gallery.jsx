
import { Checkbox } from "@/components/ui/checkbox"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedItems } from "../actions/gallery"
import { gallery } from "../constants"

export function Gallery() {
    const dispatch = useDispatch()

    const items = useSelector((state) => state.gallery.items)
    const selectedItems = useSelector((state) => state.gallery.selectedItems)

    const handleSelecItem = (checked, item) => {
        let items = [...selectedItems]
        if (checked) {
            items.push(item)
        } else {
            items = items?.filter(element => element.id !== item.id)
        }
        dispatch(setSelectedItems(items))
    }

    return (
        <main>
            <div className="flex items-center space-x-0.5 m-2">
                <Checkbox
                    checked={!!selectedItems?.length}
                    onCheckedChange={(checked) => dispatch(setSelectedItems(checked ? gallery : []))}
                />
                <label className="text-sm">
                    <Badge variant="outline" className="p-1">{selectedItems?.length}</Badge>selected
                </label>
            </div>
            <Separator className="my-4" />
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-3 grid-cols-6">
                    {items?.map(item => (
                        <div key={item.id} className="flex flex-col">
                            <AspectRatio className="flex m-1 items-center ">
                                <img src={item.src} className="rounded-sm object-cover" />
                                <Checkbox
                                    className="absolute bottom-0 left-0"
                                    checked={!!selectedItems?.filter(element => element.id === item.id)?.length}
                                    onCheckedChange={(checked) => handleSelecItem(checked, item)}
                                />
                            </AspectRatio>
                            <p className="text-sm flex justify-center">{`${item.title}.${item.format}`}</p>
                        </div>
                    ))}
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl hover:bg-muted/50 md:min-h-min " />
            </div>
        </main>
    )
}