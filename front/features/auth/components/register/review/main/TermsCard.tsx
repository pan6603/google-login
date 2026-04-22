import TermsDescription from "@/features/auth/components/register/review/main/TermsDescription";
import AgreementCheckbox from "@/features/auth/components/register/review/main/AgreementCheckbox";


export default function TermsCard() {
    return (
        <div className="w-full max-w-[453px] min-h-[428px] h-auto bg-[#F1F4FA] rounded-2xl p-4 flex flex-col justify-between">
            <span className="text-[18px] font-bold text-[#181C20]">Terms & Conditions</span>
            <TermsDescription />
            <AgreementCheckbox />
        </div>
    )
}