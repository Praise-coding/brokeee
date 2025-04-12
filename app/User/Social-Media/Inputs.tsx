import {DeepRequired, FieldErrorsImpl, FieldValues, GlobalError, UseFormRegister} from "react-hook-form";
import InputTemp from "@/app/components/ui/InputTemp";
import React from "react";

const Inputs = ({optionSelected, register, errors}: {
    optionSelected: string,
    register: UseFormRegister<FieldValues>,
    errors: Partial<FieldErrorsImpl<DeepRequired<FieldValues>>> & {
        root?: Record<string, GlobalError> & GlobalError
    },
}) => {

    return (
        <>
            {optionSelected != "Bank Transfer" &&
                <InputTemp
                    errors={errors} inputChange={register} inputName={"walletAddress"}
                    placeholder={`Enter your ${optionSelected} wallet address`}/>}
            {optionSelected == "Bank Transfer" && (
                <>
                    <InputTemp
                        errors={errors} inputChange={register} inputName={"FullName"}
                        placeholder={"Full Name"}/>
                    <InputTemp
                        errors={errors} inputChange={register} inputName={"Address"}
                        placeholder={"Address"}/>
                    <InputTemp
                        errors={errors} inputChange={register} inputName={"BankName"}
                        placeholder={"Bank Name"}/>
                    <InputTemp type={"number"}
                               errors={errors} inputChange={register} inputName={"AccountNumber"}
                               placeholder={"Account Number"}/>
                    <InputTemp type={"number"}
                               errors={errors} inputChange={register} inputName={"IBANSWIFTCode"}
                               placeholder={"IBAN/SWIFT Code"}/>
                </>
            )
            }
        </>

    )
}

export default Inputs
