"use client"

import { ChangeEvent, useState } from "react";

import PasswordVisibilityToggle from "@/shared/ui/input/PasswordVisibilityToggle";

type PasswordInputProps = {
    className?: string;
    label: string;
    placeholder?: string;
    imageSrc?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    showVisibilityToggle?: boolean;
};


export default function PasswordInput({
    className,
    label,
    placeholder,
    imageSrc,
    value,
    onChange,
    showVisibilityToggle,
}: PasswordInputProps) {
    const [visible, setVisible] = useState(false);
    const shouldShowVisibilityToggle = showVisibilityToggle ?? Boolean(imageSrc);

    return (
        <div className={className}>
            <label className="w-full max-w-[446px] min-h-[20px] h-auto text-[#424753]">{label}</label>
            <input 
                type={visible ? "text" : "password"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full max-w-[446px] min-h-[65px] h-auto bg-[#F1F4FA] rounded-lg text-[#424753] p-4 pr-14"
            />

            {shouldShowVisibilityToggle && 
                <PasswordVisibilityToggle 
                    className="absolute right-4 top-[46px] flex h-8 w-8 items-center justify-center rounded-md"
                    visible={visible}
                    onToggle={() => setVisible((currentVisible) => !currentVisible)}
                    />
                }
        </div>
    )
}
