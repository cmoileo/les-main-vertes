import {useEffect, useState} from "react";

export const useAccessibilyBarViewModel = () => {
    const [primaryColor, setPrimaryColor] = useState("red");
    const colors = ["red", "blue", "green", "yellow", "purple"];
    useEffect(() => {
        document.documentElement.style.setProperty("--primary-color", primaryColor);
    }, [primaryColor]);

    return {
        setPrimaryColor,
        colors
    };
}