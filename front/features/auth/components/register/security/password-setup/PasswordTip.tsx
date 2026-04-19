



export default function PasswordTip() {
    return (
        <div className="w-full max-w-[319px] min-h-[100px] h-auto flex flex-col justify-end items-center">
            <div className="w-full max-w-[319px] min-h-[68px] h-auto flex flex-col justify-between items-center">
                <span className="text-[#006E2C] font-semibold text-sm">Your data stays private and encrypted</span>
                <p className="text-[#424753] text-xs text-center">
                    Tip: Use a long phrase that&apos;s easy for you to remember
                    but hard for others to guess.
                </p>
            </div>
        </div>
    )
}