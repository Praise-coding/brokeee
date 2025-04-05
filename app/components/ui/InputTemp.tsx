import React from "react";
import {DeepRequired, FieldErrorsImpl, FieldValues, GlobalError, UseFormRegister} from "react-hook-form";

export default function InputTemp({placeholder, height, optional, minLength, type, errors, inputName, inputChange}: {
    placeholder: string,
    inputName: string,
    inputChange: UseFormRegister<FieldValues>,
    errors: Partial<FieldErrorsImpl<DeepRequired<FieldValues>>> & {
        root?: Record<string, GlobalError> & GlobalError
    },
    type?: string,
    minLength?: number
    optional?: boolean
    height?: boolean
}) {
    return (
        <>
            <div>
                <input type={type != "number" ? type : undefined} {...inputChange(inputName, {
                    required: optional ? "" : `${inputName} is required`,
                    minLength: minLength ? {value: minLength, message: `Minimum length is ${minLength}`} : undefined,
                    validate: (value) => {
                        return (
                            type && !(["password", "email"].includes(type)) ? (isNaN(value) ? "Value needs to be a number" : undefined) : undefined
                        )
                    }
                })}

                       placeholder={placeholder}
                       className={`w-full  text-[#ABAFB1]  bg-[rgba(0,0,0,0.1)] font-poppins  ${height ? "h-[45px] sm:h-[45px]":  "h-[50px] sm:h-[52px]"} rounded-[8px] px-[16px]  border-[rgba(255,255,255,0.7)] border text-[14px] sm:text-[16px] md:border-[1.3px] `}/>
                {errors[inputName] ? <div className={"text-red-300 font-[300] font-poppins mt-[10px] text-[12px]"}>
                    {/*// @ts-expect-error typescript is bugging*/}
                    {errors[inputName]?.message}
                </div> : undefined}
            </div>
        </>
    )
}