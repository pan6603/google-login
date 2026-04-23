import SuccessNavbarBrand from "@/features/auth/components/register/success/top/SuccessNavbarBrand";
import HeaderActions from "@/features/auth/components/register/success/top/HeaderActions";


export default function SuccessTop() {
    return (
        <div className="w-full max-w-[1440px] min-h-[64px] h-auto bg-[#F7F9FF] px-8 flex items-center justify-between">
            <SuccessNavbarBrand />
            <HeaderActions />
        </div>
    )
}