



export default function PasswordSetupHeader() {
    return (
        <div className="w-full max-w-[384px] min-h-[162px] h-auto">
            <div className="w-full max-w-[384px] min-h-[130px] h-auto flex flex-col justify-between items-center">
                <h1 className="text-[#181C20] font-extrabold text-4xl">Set your password</h1>
                <p className="text-[#424753] text-base text-center">
                    Choose a strong password to lock your vault. For <br />
                    your security, we never see or store this <br />
                    password.
                </p>
            </div>
        </div>
    )
}