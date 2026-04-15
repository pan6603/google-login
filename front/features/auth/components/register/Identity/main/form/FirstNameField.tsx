
type FirstNameFieldProps = {
    label: string;
    placeholder: string;
}


export default function FirstNameField({ label, placeholder }: FirstNameFieldProps) {
    return (
        <div className="w-full max-w-[233px] min-h-[83px] h-auto">
            <label className="text-sm font-semibold text-[#424753]">{label}</label>
            <input 
                className="w-full max-w-[233px] min-h-[55px] h-auto bg-[#E5E8EE] rounded-xl px-4 py-[18px] text-[#000000]" 
                type="text"
                placeholder={placeholder} 
            />
        </div>
    )
}