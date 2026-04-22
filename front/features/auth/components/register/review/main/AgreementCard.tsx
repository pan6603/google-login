import TermsCard from "@/features/auth/components/register/review/main/TermsCard";
import CTASection from "@/features/auth/components/register/review/main/CTASection";
import SecurityBadge from "@/shared/ui/badge/SecurityBadge";

export default function AgreementCard() {
    return (
        <div className="w-full max-w-[453px] min-h-[603px] h-auto flex flex-col justify-between">
            <TermsCard />
            <CTASection />
            <SecurityBadge className="w-full max-w-[453px] min-h-[35px] h-auto flex flex-col justify-end" />
        </div>
    )
}