



export default function AgreementCheckbox() {
    return (
        <div className="w-full max-w-[389px] min-h-[48px] h-auto flex items-start gap-4">
            <input type="checkbox" id="agreement" name="agreement" className="w-full max-w-[20px] min-h-[24px] h-auto bg-[#FFFFFF]" />
            <label className="text-sm font-medium text-[#424753]">
                I agree to the Digital Sanctuary Terms of Service and <br />
                Privacy Policy.
            </label>
        </div>
    )
}