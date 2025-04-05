"use client"
import React from 'react';
import {COUNTRIES} from "@/app/(auth)/SignUp/countriesArray";

import {SignupFormInput} from "@/app/Types";
import {DeepRequired, FieldErrorsImpl, GlobalError, UseFormRegister} from "react-hook-form";


type formInfo = "First Name" | "Last Name" | "Phone Number" | "Email" | "Country" | "Password" | "Confirm Password"

function InputAndInputName({
                               formInfo,
                               errorMessage,
                               minLength,
                               select,
                               errors,
                               inputChange,
                               placeholder,
                               type
                           }: {
    formInfo: formInfo,
    type?: string,
    select?: boolean,
    placeholder?: string,
    inputChange: UseFormRegister<SignupFormInput>,
    errors: Partial<FieldErrorsImpl<DeepRequired<SignupFormInput>>> & {
        root?: Record<string, GlobalError> & GlobalError
    },
    errorMessage?: string,
    minLength?: number,

}) {

    return (
        <div className={"flex-1"}>
            <div className={"font-poppins leading-[24px]"}>
                {formInfo}
            </div>
            <div className={"mt-[13px]"}>
                {select ?
                    <div
                        className={"border px-[18px] sm:px-[25px] font-poppins font-[300] text-[14px] placeholder:text-[#808080] leading-[21px] rounded-[9px] border-[#ADADAD] h-[57px] w-full"}>
                        <select {...inputChange(formInfo, {required: true})} className={"w-full  h-full"}
                        >
                            {COUNTRIES.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                    :
                    <input {...inputChange(formInfo, {
                        required: `${formInfo} is required`,
                        minLength: minLength ? {
                            value: minLength,
                            message: `Minimum length is ${minLength}`
                        } : undefined,
                        validate: (value) => {
                            // @ts-expect-error isnan is bugging
                            return (type && !(["password", "email"].includes(type)) ? (isNaN(value) ? "Value needs to be a number" : undefined) : undefined)
                        }
                    })} placeholder={placeholder} type={type && type != "number" ? type : undefined}
                           className={"border font-poppins font-[300] text-[14px] placeholder:text-[#808080] leading-[21px] rounded-[9px] border-[#ADADAD] px-[18px] sm:px-[25px] h-[57px] w-full"}/>
                }

            </div>
            {
                (errors[formInfo] || errorMessage) &&
                <div className={"text-[red] font-[300] font-poppins mt-[5px] text-[12px]"}>
                    {errors[formInfo]?.message}
                </div>
            }
        </div>
    );
}

export default InputAndInputName;
