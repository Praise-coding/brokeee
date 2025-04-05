"use client"
import {FieldValues, UseFormSetFocus, UseFormWatch} from "react-hook-form";
import {useEffect} from "react";

export function useFocusNext({array, onFocused, setFocus, watch}: {
    array: string[],
    onFocused: boolean,
    setFocus: UseFormSetFocus<FieldValues>,
    watch
        :
        UseFormWatch<FieldValues>
}) {
    useEffect(() => {
        localStorage.setItem("first", "dd")
    }, []);
    array.forEach((field, index) => {
        const currentValue = watch(field)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (onFocused) {
                if (currentValue !== "" && index < array.length - 1) {
                    setFocus(array[index + 1]);
                } else if (currentValue == "" && index > 0) {
                    if (localStorage.getItem("first") && index == 3) {
                        setFocus("1");
                        localStorage.removeItem("first");
                    } else {
                        setFocus(array[index - 1]);
                    }
                }
            }

        }, [currentValue, index]);
    });


}