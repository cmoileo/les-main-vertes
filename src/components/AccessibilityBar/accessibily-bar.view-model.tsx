"use client"
import {useAccessibilyBarViewModel} from "@/components/AccessibilityBar/accessibily-bar.component";
import {Popover, PopoverContent, PopoverTrigger} from "@/ui/popover.ui";

export const AccessibilyBarViewModel = () => {
    const {setPrimaryColor, colors} = useAccessibilyBarViewModel();
    return (
        <main>
            <Popover>
                <PopoverTrigger>
                    <h1 className={"text-accent-1"}>Click me ;)</h1>
                </PopoverTrigger>
                <PopoverContent>
                    <div className={"flex gap-10"}>
                        {colors.map((color) => (
                            <button key={color} onClick={() => setPrimaryColor(color)}>{color}</button>
                        ))}
                    </div>
                </PopoverContent>
            </Popover>
        </main>
    );
}