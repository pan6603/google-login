import FooterNavigation from "@/features/auth/components/register/success/footer/FooterNavigation";
import CopyrightNotice from "@/features/auth/components/register/success/footer/CopyrightNotice";


export default function SuccessFooter() {
    return (
        <div className="w-full max-w-[1440px] min-h-[117px] h-auto bg-[#F7F9FF] border-t border-[#C2C6D5] flex flex-col items-center justify-center gap-5">
            <FooterNavigation />
            <CopyrightNotice />
        </div>
    )
}