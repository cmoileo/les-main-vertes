import {useEffect, useState} from "react";
import {changeVariables} from "./change-variable";

export const useAccessibilyBarViewModel = () => {
    const [type, setType] = useState("red");
    const types = ["Daltonyen", "Arthrose", "Parkinson"];
    useEffect(() => {
        changeVariables(type)
    }, [type]);

    return {
        setType,
        types
    };
}