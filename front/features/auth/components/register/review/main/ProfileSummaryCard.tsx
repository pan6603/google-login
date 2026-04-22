import ProfileSummaryCardTitle from "@/features/auth/components/register/review/main/ProfileSummaryCardTitle";
import ProfileInfoSection from "@/features/auth/components/register/review/main/ProfileInfoSection";
import StatusMessage from "@/features/auth/components/register/review/main/StatusMessage";


export default function ProfileSummaryCard() {
    return (
        <div className="w-full max-w-[314px] min-h-[457px] h-auto bg-[#FFFFFF] p-8 rounded-xl flex flex-col justify-between">
            <ProfileSummaryCardTitle />
            <ProfileInfoSection />
            <StatusMessage />
        </div>
    )
}