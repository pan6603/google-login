
type PasswordStrengthLabelProps = {
    label: string;
    toneClassName: string;
};


export default function PasswordStrengthLabel({ label, toneClassName }: PasswordStrengthLabelProps) {
    return (
        <div className="w-full max-w-[446px] min-h-[16px] h-auto flex items-center justify-between">
            <span className="text-[#4B5563] font-bold text-xs uppercase tracking-[0.04em]">Password Strength</span>
            <span className={`${toneClassName} font-bold text-xs uppercase tracking-[0.04em]`}>{label}</span>
        </div>
    )
}
