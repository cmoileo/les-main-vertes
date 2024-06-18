"use client"
import {useAccessibilyBarViewModel} from "./accessibily-bar.component";
import {Popover, PopoverContent, PopoverTrigger} from "../../ui/popover.ui";

export const AccessibilyBarViewModel = () => {
    const {setType, types} = useAccessibilyBarViewModel();
    return (
        <main>
            <Popover>
                <PopoverTrigger>
                    <h1 className={"text-accent-1"}>Click me ;)</h1>
                </PopoverTrigger>
                <PopoverContent>
                    <div className={"flex gap-10"}>
                        {types.map((type) => (
                            <button className={"text-black"} key={type} onClick={() => setType(type)}>{type}</button>
                        ))}
                    </div>
                </PopoverContent>
            </Popover>
        </main>
    );
}