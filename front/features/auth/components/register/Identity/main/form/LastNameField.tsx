

type LastNameFieldProps = {
    label?: string;
    placeholder?: string;
}


export default function LastNameField({ label, placeholder }: LastNameFieldProps) {
    return (
        <div className="w-full max-w-[233px] min-h-[83px] h-auto flex flex-col justify-between">
            <label className="text-sm font-semibold text-[#424753]">{label}</label>
            <input 
                type="text"
                placeholder={placeholder}
                className="w-full max-w-[233px] min-h-[55px] h-auto bg-[#E5E8EE] rounded-xl px-4 py-[18px] text-[#000000]"
            />
        </div>
    )
}