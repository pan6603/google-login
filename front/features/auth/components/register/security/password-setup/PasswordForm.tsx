"use client"

import { useState } from "react";

import PasswordInput from "@/shared/ui/input/PasswordInput"
import PasswordStrengthBar from "@/features/auth/components/register/security/password-setup/PasswordStrengthBar"
import PasswordSetupActions from "@/features/auth/components/register/security/password-setup/PasswordSetupActions"


export default function PasswordForm() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <form className="w-full max-w-[512px] min-h-[496px] h-auto p-8 flex flex-col justify-between bg-[#FFFFFF] rounded-lg">
            <PasswordInput
                className="w-full max-w-[446px] min-h-[93px] h-auto flex flex-col justify-between relative"
                label="Create Password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                showVisibilityToggle
            />

            <PasswordInput
                className="w-full max-w-[446px] min-h-[93px] h-auto flex flex-col justify-between relative"
                label="Confirm Password"
                placeholder="Repeat password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
            />

            <PasswordStrengthBar password={password} />
            <PasswordSetupActions />
        </form>
    )
}
