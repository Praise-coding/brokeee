import React from "react";
import {FieldValues, UseFormRegister} from "react-hook-form";

export default function SelectTemp({inputName, options, selectionType, defaultValue, inputChange}: {
    inputName: string,

    inputChange: UseFormRegister<FieldValues>,
    options: string[],
    selectionType: string,
    defaultValue: string | undefined
}) {
    return (
        <div
            className="w-full  text-[#ABAFB1]  bg-[rgba(0,0,0,0.1)] font-poppins h-[50px] sm:h-[52px] rounded-[8px] px-[16px]  border-[rgba(255,255,255,0.7)] border text-[14px] sm:text-[16px] md:border-[1.3px] ">
            <select
                {...inputChange(inputName)}
                defaultValue={defaultValue ? defaultValue : undefined}
                className="w-full h-full cursor-pointer text-[#ABAFB1]  rounded-[8px]  bg-transparent">
                <option disabled>Choose a {selectionType ? selectionType + " method" : selectionType} </option>
                {options.map((options, key) => (
                    <option key={key} className={"cursor-pointer"}>
                        {options}
                    </option>
                ))
                }
            </select>
        </div>
    )
}
