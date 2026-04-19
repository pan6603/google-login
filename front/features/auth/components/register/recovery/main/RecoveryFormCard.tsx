import MoblieNumberFormSection from "@/features/auth/components/register/recovery/main/MobileNumberFormSection";
import EmailFormSection from "@/features/auth/components/register/recovery/main/EamilFormSection";



export default function RecoveryFormCard() {
    return (
        <div className="w-full max-w-[576px] min-h-[425px] h-auto p-[32px] flex flex-col items-center justify-between">
            <MoblieNumberFormSection />
            <EmailFormSection />
        </div>
    )
}