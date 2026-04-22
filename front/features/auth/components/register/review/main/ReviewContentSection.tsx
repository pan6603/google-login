import ProfileSummaryCard from "@/features/auth/components/register/review/main/ProfileSummaryCard";
import AgreementCard from "@/features/auth/components/register/review/main/AgreementCard";


export default function ReviewContentSection() {
    return (
        <div className="w-full max-w-[800px] min-h-[604px] h-auto flex items-start justify-between">
            <ProfileSummaryCard />
            <AgreementCard />
        </div>
    )
}