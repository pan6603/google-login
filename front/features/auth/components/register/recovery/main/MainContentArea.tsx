import PageTitle from "@/features/auth/components/register/recovery/main/PageTitle";
import RecoveryFormCard from "@/features/auth/components/register/recovery/main/RecoveryFormCard";
import HelperText from "@/features/auth/components/register/recovery/main/HelperText";

export default function MainContentArea() {
    return (
        <main className="w-full max-w-[1440px] min-h-[790px] h-auto bg-[#F7F9FF] flex justify-center items-center">
            <div className="w-full max-w-[576px] min-h-[694px] h-auto flex flex-col items-center justify-between">
                <PageTitle />
                <RecoveryFormCard />
                <HelperText />
            </div>
        </main>
    )
}