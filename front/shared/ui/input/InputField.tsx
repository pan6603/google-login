import Link from "next/link"

type InputFieldProps = {
    className?: string
    placeholder?: string
    label?: string
    forgotPasswordLink?: string
}


export default function InputField({ className, placeholder, label, forgotPasswordLink }: InputFieldProps) {
    return (
        <div className={className}>
            <div className="w-full max-w-[342px] min-h-[20px] h-auto flex items-center justify-between">
                <label className="text-sm font-medium text-[#424753]">{label}</label>

                {forgotPasswordLink && <Link href="/" className="text-xs font-semibold text-[#0058BD]">{forgotPasswordLink}</Link>}
            </div>

            <input 
                type="text" 
                placeholder={placeholder} 
                className="w-full max-w-[342px] min-h-[55px] bg-[#E5E8EE] rounded-xl text-[#6B7280] px-4 py-4"
            />
        </div>
    )
}