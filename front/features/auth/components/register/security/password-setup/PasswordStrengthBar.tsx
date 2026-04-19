"use client"

import PasswordStrengthLabel from "@/features/auth/components/register/security/password-setup/PasswordStrengthLabel";
import StrengthBar from "@/features/auth/components/register/security/password-setup/StrengthBar";

type PasswordStrengthBarProps = {
    password: string;
};

type StrengthTone = {
    label: string;
    activeSegments: number;
    toneClassName: string;
    segmentClassName: string;
};

function getPasswordStrength(password: string): StrengthTone {
    if (!password) {
        return {
            label: "None",
            activeSegments: 0,
            toneClassName: "text-[#9AA3B2]",
            segmentClassName: "bg-[#D7DEE8]",
        };
    }

    let score = 0;

    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 1) {
        return {
            label: "Weak",
            activeSegments: 1,
            toneClassName: "text-[#B54708]",
            segmentClassName: "bg-[#F59E0B]",
        };
    }

    if (score <= 3) {
        return {
            label: "Medium",
            activeSegments: 2,
            toneClassName: "text-[#0F766E]",
            segmentClassName: "bg-[#2FA58A]",
        };
    }

    return {
        label: "Strong",
        activeSegments: 3,
        toneClassName: "text-[#006E2C]",
        segmentClassName: "bg-[#2E7D4F]",
    };
}

export default function PasswordStrengthBar({ password }: PasswordStrengthBarProps) {
    const strength = getPasswordStrength(password);

    return (
        <div className="w-full max-w-[446px] min-h-[36px] h-auto flex flex-col justify-between items-center">
            <PasswordStrengthLabel label={strength.label} toneClassName={strength.toneClassName} />
            <StrengthBar activeSegments={strength.activeSegments} segmentClassName={strength.segmentClassName} />
        </div>
    )
}
