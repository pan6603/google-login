import IdentityNameFields from "@/features/auth/components/register/Identity/main/form/IdentityNameFields";
import IdentityFormActions from "@/features/auth/components/register/Identity/main/form/IdentityFormActions";



export default function IdentityForm() {
    return (
        <form className="w-full max-w-[490px] min-h-[238px] h-auto flex flex-col justify-between">
            <IdentityNameFields />
            <IdentityFormActions />
        </form>
    )
}