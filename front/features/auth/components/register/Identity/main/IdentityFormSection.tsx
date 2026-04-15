import IdentityFormHeader from "@/features/auth/components/register/Identity/main/IdentityFormHeader";
import IdentityForm from "@/features/auth/components/register/Identity/main/form/IdentityForm";
import IdentitySocialProof from "@/features/auth/components/register/Identity/main/form/IdentitySocialProof";

export default function IdentityFormSection() {
    return (
        <div className="w-full max-w-[570px] min-h-[505px] h-auto bg-[#FFFFFF] rounded-3xl p-10 flex flex-col justify-between">
            <IdentityFormHeader />
            <IdentityForm />
            <IdentitySocialProof />
        </div>
    )
}